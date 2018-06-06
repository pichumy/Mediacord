# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all

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
