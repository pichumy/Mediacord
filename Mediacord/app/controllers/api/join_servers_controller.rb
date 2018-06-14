class Api::JoinServersController < ApplicationController
  def create
    p '------------'
    p params
    p '------------'
    if params[:id]
      @user = User.find(params[:id])
    else
      @user = current_user
    end
    @member = ServerMembership.new(user_id: @user.id, server_id: params[:server_id]);
    if @member.save
      render '/api/users/show'
    else
      render @member.errors.full_messages, status: 422
    end
  end
end
