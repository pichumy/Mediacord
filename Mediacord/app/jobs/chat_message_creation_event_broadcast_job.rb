class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default
  def perform(message)
    ActionCable
      .server
      .broadcast("chat_#{message.channel_id}", command: "new_message")
  end
end
