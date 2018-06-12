# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
Channel.delete_all
Message.delete_all

user1 = User.new(username: "Admin", password:"password")
user2 = User.new(username: "Admin1", password:"password")
user3 = User.new(username: "Admin2", password:"password")
demo = User.new(username: "Demo", password:"password")
user1.save!
user2.save!
user3.save!
demo.save!

poi = Server.new(name: "Person of Interest", avatar_url: "poi.jpg");
poi.save!

gb = Server.new(name: "Grand Blue", avatar_url: "grandblue.png");
gb.save!

ServerMembership.create!(user_id: user1.id, server_id: poi.id);

ch1 = Channel.new(name: "General 1", server_id: gb.id);
ch2 = Channel.new(name: "General 2", server_id: poi.id);
ch1.save!
ch2.save!

message1 = Message.new(channel_id: ch2.id, user_id: user1.id, text:"First message");
message2 = Message.new(channel_id: ch2.id, user_id: user1.id, text:"Second message");
message1.save!
message2.save!
message3 = Message.new(channel_id: ch1.id, user_id: user2.id, text:"Just to not break");
message3.save!
