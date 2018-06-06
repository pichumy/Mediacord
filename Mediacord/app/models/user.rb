class User < ApplicationRecord
  validates :session_token, uniqueness:true, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true, message: "Password must be at least 6 characters long!" }
  before_validation :ensure_session_token

  attr_reader :password

  # before_save :set_status
  has_many :server_memberships

  has_many :servers,
  through: :server_memberships,
  source: :server

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    return @user if BCrypt::Password.new(@user.password_digest).is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


end
