class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default
  def perform(message)
    ActionCable
      .server
      .broadcast("chat_#{message.channel_id}",
        command: "new_message",
        message: {
          id: message.id,
          user_id: message.user_id,
          channel_id: message.channel_id,
          text: message.text
        }
      )
  end
end
