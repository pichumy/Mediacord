json.array! @users do |user|
  json.extract! user, :id, :username, :offline 
  json.avatar_url asset_path user.avatar_url
end
