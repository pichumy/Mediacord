class Server < ApplicationRecord
  validates :name, presence: true

  has_many :server_memberships

  has_many :users,
  through: :server_memberships,
  source: :user

  has_many :channels

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User

end
