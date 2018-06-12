json.array! @users do |user|
  user.extract! user, :id, :username, :offline
  json.avatar_url asset_path user.avatar_url
end
