class Api::ServersController < ApplicationController

  before_action :require_login

  def index
    @user = User.find_by(id: current_user.id)
    @servers = @user.servers
    render :index
  end

  def show
    @server = Server.find(params[:id])
    @channels = @server.channels
    @users = @server.users
    render :show
  end

  def create
    @server = Server.new(server_params)
    if @server.save
      # server = Server.find_by(name: @server.name)
      # channel = Channel.new(server_id: server.id, name: "General");
      # channel.save
      # @channels = @server.channels
      @channels = []
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    #TODO
  end

  def destroy
    #TODO
  end

  def server_params
    params.require(:server).permit(:avatar_url, :name, :private)
  end

end
