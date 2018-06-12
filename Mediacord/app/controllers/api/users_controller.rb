class Api::UsersController < ApplicationController

  def index
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: { general: @user.errors.full_messages[0] }, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = current_user
    if @user.id != user_params.id
      render json: ["Insufficient permissions!"], status: 422
    end
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :username, :password, :avatar_url, :offline)
  end

end
