json.array! @servers do |server|
  json.id server.id
  json.name server.name
  json.image_url asset_path server.avatar_url
end
