class Server < ApplicationRecord
  validates :name, presence: true

  has_many :users

  belongs_to :user
end
