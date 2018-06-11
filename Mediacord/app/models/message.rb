class Message < ApplicationRecord
  validates :channel_id, :user_id, presence: true

  belongs_to :channel

  after_create_commit do
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end
  
end
