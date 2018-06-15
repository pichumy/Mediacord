json.array! @users do |user|
  json.extract! user, :id, :username, :offline
  json.avatar_url user.avatar_url
end
