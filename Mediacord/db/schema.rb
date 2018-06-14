# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180613173424) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["server_id", "name"], name: "index_channels_on_server_id_and_name", unique: true
  end

  create_table "friends", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "friend_id", null: false
    t.boolean "accepted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["accepted"], name: "index_friends_on_accepted"
    t.index ["friend_id", "user_id"], name: "index_friends_on_friend_id_and_user_id", unique: true
    t.index ["user_id"], name: "index_friends_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "text", null: false
    t.integer "channel_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_messages_on_channel_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "server_memberships", force: :cascade do |t|
    t.integer "server_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["server_id", "user_id"], name: "index_server_memberships_on_server_id_and_user_id", unique: true
  end

  create_table "servers", force: :cascade do |t|
    t.string "name", null: false
    t.string "avatar_url", default: "discord-logo.png"
    t.boolean "private", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "owner_id"
    t.index ["avatar_url"], name: "index_servers_on_avatar_url"
    t.index ["name"], name: "index_servers_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "avatar_url", default: "discord-logo.png"
    t.boolean "offline", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["avatar_url"], name: "index_users_on_avatar_url"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
