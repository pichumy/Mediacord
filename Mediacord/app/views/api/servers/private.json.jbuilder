@servers.each do |server|
    json.array! server.channels do |channel|
      json.extract! channel, :id, :name
      json.avatar_url server.users[0].avatar_url
      json.users server.users
      json.server_id server.id
    end
end
# User ID used only for inviting other party when first message is sent
