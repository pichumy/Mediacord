class UserOnlineEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(user)
    channels = user.channels
    channels.each do |channel|
      ActionCable
        .server
        .broadcast("chat_#{channel.id}", command: "update_users")
    end
  end


end
