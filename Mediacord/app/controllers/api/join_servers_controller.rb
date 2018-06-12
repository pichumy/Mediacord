class Api::JoinServersController < ApplicationController
  def create
    @member = ServerMembership.new(user_id: current_user.id, server_id: params[:server_id]);
    if @member.save
      render json: "Success"
    else
      render @member.errors.full_messages, status: 422
    end
  end
end
