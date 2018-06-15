json.channel do
  json.id @channel.id
  json.name @channel.name
  json.server_id @channel.server_id
  json.messages do
    json.array @messages do |message|
      json.extract! message, :channel_id, :user_id, :id, :text
      if Time.now - 24.hours < message.created_at
        json.time_stamp message.created_at.strftime('%H:%M%p')
      else
        json.time_stamp message.created_at.strftime('%_m/%d/%Y')
      end
    end
  end
end
