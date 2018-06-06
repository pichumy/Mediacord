class Server < ApplicationRecord
  validates :name, presence: true

  has_many :server_memberships

  has_many :users,
  through: :server_memberships,
  source: :user
end
