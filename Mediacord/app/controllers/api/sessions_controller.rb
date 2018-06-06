class Api::SessionsController < ApplicationController
  def create
    @errors = {}
    @errors[:username] = "Username can't be blank!" unless params[:user][:username].length > 0
    @errors[:password] = "Password can't be blank!" unless params[:user][:password].length > 0 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      @errors[:general] = "Invalid username/password combination" unless @errors[:username] || @errors[:password]
      render json: @errors, status: 422
    end

  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: "Not logged in!", status: 404
    end
  end

end
