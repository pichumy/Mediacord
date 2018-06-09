class Api::ChannelsController < ApplicationController

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      @log = Log.new(channel_id: @channel.id)
      @log.save!
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = Channel.find(params[:id])
    p @channel
    @log = @channel.log
    render :show
  end

  def destroy
    #TODO
  end

  def update
    #TODO
  end

  def channel_params
    params.require(:channel).permit(:server_id, :name)
  end

end
