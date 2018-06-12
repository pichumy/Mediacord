class Api::UserListsController < ApplicationController
  def show
    @server = Server.find(params[:server_id])
    @users = @server.users
    render :show
  end
end
