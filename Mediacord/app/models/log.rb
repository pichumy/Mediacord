class Log < ApplicationRecord
  validates :channel_id, presence: true

  belongs_to :channel,
  foreign_key: :channel_id,
  class_name: :Channel

  has_many :messages

end
