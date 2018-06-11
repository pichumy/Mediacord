class Channel < ApplicationRecord
  validates :name, :server_id, presence: true
  belongs_to :server

  has_many :messages

end
