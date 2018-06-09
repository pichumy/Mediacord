class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def message_params
    params.require(:message).permit(:text, :user_id, :log_id)
  end

end
