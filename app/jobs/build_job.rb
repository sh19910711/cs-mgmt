require 'rubygems' # rubyzip uses it
require 'zip'

class BuildJob < ApplicationJob
  queue_as :build

  def perform(build_id)
    build = Build.find(build_id)
    logger.info "build ##{build_id}: starting"
    build.update!(status: 'building')

    Dir.mktmpdir("cs-build-") do |tmpdir|
      app_zip = File.join(tmpdir, 'app.zip')
      IO.binwrite(app_zip, build.source_file)

      begin
        Zip::File.open(app_zip) do |zip_file|
          zip_file.each do |f|
            if [:file, :directory].include?(f.ftype)
              f.extract(File.join(tmpdir, f.name))
            end
          end
        end
      rescue Zip::Error
        success = false
      else
        container = %x[docker create codestand/baseos].strip
        %x[docker cp #{tmpdir} #{container}:/app]

        stdout = %x[docker start --attach #{container} 2>&1]
        success = $?.success?

        image = stdout.match('^cp resea/image (.*\.image)$')[1]
        %x[docker cp #{container}:#{image} #{tmpdir}]
        %x[docker rm #{container}]
      end

      logger.info "build ##{build_id}: #{success ? 'success' : 'failure'}"

      # update the build status
      build.status = success ? 'success' : 'failure'
      build.log = stdout
      build.source_file = nil
      build.save!

      unless success
        break
      end

      # deploy images
      group_id = SecureRandom.uuid
      Dir["*.*.image"].each do |file|
        logger.info "build ##{build_id}: deploying #{file}"
        DeployService.new.deploy(build.app, group_id, file, File.open(file), build.tag)
      end
    end
  end
end
