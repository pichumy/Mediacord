class Channel < ApplicationRecord
  validates :name, :server_id, presence: true
  belongs_to :server

  has_one :log,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :Log

end
