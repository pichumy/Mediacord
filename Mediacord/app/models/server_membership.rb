class ServerMembership < ApplicationRecord
  validates :server_id, :user_id, presence: true
  validates :user_id, uniqueness: { scope: [:server_id], message: "You are already on that server!" } 

  belongs_to :server,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Server

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end
