json.server do
  json.extract! @server, :id, :name
  json.image_url asset_path @server.avatar_url
  json.channels do
    json.array! @channels do |channel|
      json.extract! channel, :id, :name, :server_id
    end
  end 
end
