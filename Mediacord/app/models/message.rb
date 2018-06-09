class Message < ApplicationRecord
  validates :log_id, :user_id, presence: true

  belongs_to :log 
end
