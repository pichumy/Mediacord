class Api::ChannelsController < ApplicationController

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
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
