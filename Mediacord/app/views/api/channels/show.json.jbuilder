json.channel do
  json.id @channel.id
  json.name @channel.name
  json.server_id @channel.server_id
  json.log do
    json.extract! @log, :id, :channel_id
  end
end
