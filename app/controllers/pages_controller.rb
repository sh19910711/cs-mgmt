class PagesController < ActionController::Base
  def page
  end

  def default_render
    render :router
  end
end
