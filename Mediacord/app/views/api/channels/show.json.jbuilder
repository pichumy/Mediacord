json.channel do
  json.id @channel.id
  json.name @channel.name
  json.server_id @channel.server_id
  json.messages do
    json.array @messages do |message|
      json.extract! message, :channel_id, :user_id, :id, :text
    end
  end
end
