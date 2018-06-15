class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:id]}"
  end

  def unsubscribed; end

  def create(opts)
    Message.create(
      text: opts.fetch('text'),
      user_id: opts.fetch('user_id'),
      channel_id: opts.fetch('channel_id'),
      image: opts.fetch('image')
    )
  end
end
