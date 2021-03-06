class Api::JoinServersController < ApplicationController
  def create
    if params[:id]
      @user = User.find(params[:id])
    else
      @user = current_user
    end
    @member = ServerMembership.new(user_id: @user.id, server_id: params[:server_id]);
    if @member.save
      # server = Server.find(params[:server_id])
      # JoinServerEventBroadcastJob.perform_later(server)
      render '/api/users/show'
    else
      render json: ["You are already on that server!"], status: 422
    end
  end
end
