class Api::LogsController < ApplicationController

  def show
    @log = Log.find(params[:id])
    @messages = Log.messages
    render :show
  end

end
