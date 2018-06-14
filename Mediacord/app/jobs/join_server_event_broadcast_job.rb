class JoinServerEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(server)
    channels = server.channels
    channels.each do |channel|
      ActionCable
        .server
        .broadcast(`chat_#{channel.id}`, command:"update_users")
    end
  end
end
