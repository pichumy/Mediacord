class Api::ServersController < ApplicationController

  before_action :require_login

  def index
    @servers = Server.all
    render :index
  end

  def show
    @server = Server.find(params[:id])
  end

  def create
    @server = Server.new(server_params)
    if @server.save
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
