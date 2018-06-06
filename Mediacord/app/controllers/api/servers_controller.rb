class Api::ServersController < ApplicationController

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
  end

  def destroy
  end

end
