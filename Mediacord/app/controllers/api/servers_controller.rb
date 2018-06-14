class Api::ServersController < ApplicationController

  before_action :require_login

  def index
    @user = User.find_by(id: current_user.id)
    @servers = @user.servers
    @servers = @servers.reject { |server| server.private == true }
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
    @server.owner_id = current_user.id
    if @server.save
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

  def private_servers
    # I actually need to return the users? channels for each of the private
    # servers for the front end...
    @user = current_user
    @servers = @user.servers.reject { |server| server.private == false }
    # @channels = @servers.map(&:channels).flatten
    # @users = @servers.map(&:users).flatten
    # @data = []
    # @channel.each_with_index do |channel, idx|
    #   @data.push(channel: channel, user: @users[idx])
    # end
    render :private
  end

  def server_params
    params.require(:server).permit(:avatar_url, :name, :private)
  end

end
