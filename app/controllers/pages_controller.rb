class PagesController < ActionController::Base
  def signin
    @user = User.new
    render :signin, layout: layout_for_request
  end

  def signup
    @user = User.new
    render :signup, layout: layout_for_request
  end

  private

  def layout_for_request
    if request.headers['X-PJAX'].present?
      nil
    else
      'pages'
    end
  end
end
