class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_login

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end


  def logged_in?
    !!current_user
  end

  def logout
    current_user.update(offline: true)
    UserOnlineEventBroadcastJob.perform_later(current_user)
    current_user.session_token = current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
    user.update(offline: false)
    UserOnlineEventBroadcastJob.perform_later(user)
  end

  def require_login
    redirect_to root_url unless logged_in?
  end
end
