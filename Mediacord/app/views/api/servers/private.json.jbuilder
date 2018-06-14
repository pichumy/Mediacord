@servers.each do |server|
    json.array! server.channels do |channel|
      json.extract! channel, :id, :name
      json.avatar_url asset_path server.users[0].avatar_url
      json.user_id server.users[0].id
      json.server_id server.id
    end
end
# User ID used only for inviting other party when first message is sent
