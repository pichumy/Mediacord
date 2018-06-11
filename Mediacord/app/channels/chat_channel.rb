class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed; end

  def create(opts)
    Message.create(
      text: opts.fetch('text'),
      user_id: opts.fetch('user_id'),
      channel_id: opts.fetch('channel_id')
    )
  end
end
