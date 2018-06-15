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

poi = Server.new(name: "Person of Interest", avatar_url: "poi.jpg", owner_id: demo.id);
poi.save!

finch = User.new(username: "Harold", password:"392X85ts123739sdat12", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529092255/Finch.jpg")
reese = User.new(username: "John Reese", password:"ManInTheSuit", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529093578/Reese.jpg")
root = User.new(username: "Root", password: "1203machine12938", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529093781/root.jpg")
shaw = User.new(username: "Shaw", password: "RootXShaw", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529093888/shaw.png")
fusco = User.new(username: "Lionel", password: "fuscobaby", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529094447/lionel.jpg")
psych = User.new(username: "Psychologist", password:"ihelppeople", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529094586/Psychologist.jpg")
elias = User.new(username: "Elias", password:"theTrueKing", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529094726/Elias.jpg")

finch.save!
reese.save!
root.save!
shaw.save!
fusco.save!
psych.save!
elias.save!

gb = Server.new(name: "Grand Blue", avatar_url: "grandblue.png", owner_id: demo.id);
gb.save!

ServerMembership.create!(user_id: demo.id, server_id: poi.id);
ServerMembership.create!(user_id: finch.id, server_id: poi.id);
ServerMembership.create!(user_id: reese.id, server_id: poi.id);
ServerMembership.create!(user_id: root.id, server_id: poi.id);
ServerMembership.create!(user_id: shaw.id, server_id: poi.id);
ServerMembership.create!(user_id: fusco.id, server_id: poi.id);
ServerMembership.create!(user_id: elias.id, server_id: poi.id);
ServerMembership.create!(user_id: psych.id, server_id: poi.id);
ServerMembership.create!(user_id: demo.id, server_id: gb.id);

ch1 = Channel.new(name: "General", server_id: gb.id);
ch2 = Channel.new(name: "General", server_id: poi.id);
ch3 = Channel.new(name: "Team Machine", server_id: poi.id);
ch4 = Channel.new(name: "Quotes", server_id: poi.id);
ch5 = Channel.new(name: "Images", server_id: poi.id);

ch1.save!
ch2.save!
ch3.save!
ch4.save!
ch5.save!

Message.create!(channel_id: ch3.id, user_id: finch.id, text: "Mr. Reese, we've received a new number.")
Message.create!(channel_id: ch3.id, user_id: reese.id, text: "One of these days, you're going to have to tell me how you get them")
Message.create!(channel_id: ch3.id, user_id: finch.id, text: "All in due course, Mr. Reese. I'm transferring you to a secure line.")
Message.create!(channel_id: ch4.id, user_id: reese.id,
  text: "When you find that one person who connects you to the world, you become someone different, someone better. When that person is taken from you, what do you become then?")
Message.create!(channel_id: ch2.id, user_id: finch.id,
  text: "The numbers never stop coming, Mr. Reese.")
Message.create!(channel_id: ch4.id, user_id: finch.id,
  text: "Pi, the ratio of the circumference of a circle to its diameter, and this is just the beginning; it keeps on going, forever, without ever repeating. Which means that contained within this string of decimals, is every single other number. Your birthdate, combination to your locker, your social security number, it's all in there, somewhere. And if you convert these decimals into letters, you would have every word that ever existed in every possible combination; the first syllable you spoke as a baby, the name of your latest crush, your entire life story from beginning to end, everything we ever say or do; all of the world's infinite possibilities rest within this one simple circle. Now what you do with that information; what it's good for, well that would be up to you.")
Message.create!(channel_id: ch4.id, user_id: reese.id,
  text: "Maybe it's up to me to do what the good people can't. Or maybe there are no good people. Maybe there are only good decisions.")
Message.create!(channel_id: ch4.id, user_id: reese.id, text: "I don't have any friends. I don't have any family left either. I went around the world looking for bad guys. But there were plenty of you right here all along.")

Message.create!(channel_id: ch2.id, user_id: reese.id,
  text: "Never understood why people put all their information on those social networking sites. Used to make our job a lot easier in the CIA.")
Message.create!(channel_id: ch2.id, user_id: finch.id,
  text: "Of course. That's why I created them.")
Message.create!(channel_id: ch2.id, user_id: reese.id,
  text: "You're telling me you invented online social networking, Finch?")
Message.create!(channel_id: ch2.id, user_id: finch.id,
  text: "The Machine needed more information. People's social graph, their associations. The government had been trying to figure it out for years. Turns out most people were happy to volunteer it. Business wound up being quite profitable, too.")
Message.create!(channel_id: ch2.id, user_id: fusco.id,
  text: "You see, Jules shot an off-duty rookie last year. 24 years old. Kid had a baby on the way. But good drug dealers can afford good lawyers, so Jules walked. I had been tracking him for weeks, just waiting to get the guy alone. And there he was. Walking out of a bodega, with not a care in the world. No protection, either. He saw me. He knew why I was there. I could see it in his eyes. So I smiled at him. Just before I put two in his chest.")
Message.create!(channel_id: ch2.id, user_id: psych.id,
  text: "...You killed a man.")
Message.create!(channel_id: ch2.id, user_id: fusco.id,
  text: "Nah. He got the devil's share.")
Message.create!(channel_id: ch2.id, user_id: psych.id,
  text: "The what?")
Message.create!(channel_id: ch2.id, user_id: fusco.id,
  text: "That's what you call it when a guy like Jules gets his. It's the way the world evens things out. Guy got what he deserved, and you want to know how I've been sleeping? Like a baby.")

Message.create!(channel_id: ch4.id, user_id: elias.id,
  text: "Civilization rests on the principle that we treat our criminals better than they treated their victims, that we not stoop to their level. But you and I are outliers; we're not really part of civilization. We're something... older. Which means, of course, that we can do the things that civilized people can't. I offered to kill you for Detective Carter many times, and she always said no. She was civilized to the very end. I don't think she liked me, but I liked her very much. You killed her. So now I consider it my responsibility to fix the particular problem that is you, Officer Simmons.")

Message.create!(channel_id: ch4.id, user_id: finch.id,
  text: "Mr. Reese, I understand your frustration with the opacity of The Machine, but there's a reason I chose to make it that way. The Machine only gives us numbers because I would always rather a human element remain in determining something so critical as someone's fate. We have free will, and with that comes great responsibility, and sometimes great loss.")
Message.create!(channel_id: ch4.id, user_id: root.id,
  text: "The Machine and I couldn't save the world. We had to settle for protecting the seven people who might be able to take it back, so we gave Samaritan a blind spot: seven key servers, that hard-codes it to ignore seven carefully crafted new identities. When the whole world is watched, filed, indexed, numbered, the only way to disappear is to appear, hiding our true identities inside a seemingly ordinary life. You're not a free man anymore, Harold. You're just a number. We have to become these people now, and if we don't, they'll find us, and they'll kill us. I'm sorry, Harold. I know it's not enough. A lot of people are gonna die, people who might've been able to help. Everything is changing. I don't know if it'll get better, but it's going to get worse. But The Machine asked me to tell you something before we part. You once told John the whole point of Pandora's Box is that once you've opened it, you can't close it again. She wanted me to remind you of how the story ends. When everything is over, when the worst has happened, there's still one thing left in Pandora's Box: hope.")
# names = []
# while names.length < 12
#   new_name = Faker::HarryPotter.character
#   names.push(new_name) unless names.include?(new_name)
# end
potter1 = User.new(username: "Hermione Granger", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091776/hermione.jpg")
potter2 = User.new(username: "Ron Weasley", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091776/ron.jpg")
potter3 = User.new(username: "Harry Potter", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091052/giilv056cowxga3nfhpe.jpg")
potter4 = User.new(username: "Pomona Sprout", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091776/pomona.jpg")
potter5 = User.new(username: "Charity Burbage", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091775/charity.jpg")
potter6 = User.new(username: "Bogrod", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091713/Bogrod.jpg")
potter7 = User.new(username: "Moran", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091776/Noran.jpg")
potter8 = User.new(username: "Norbert", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091776/norbert.jpg")
potter9 = User.new(username: "Theodore Nott", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091776/theodore.png")
potter10 = User.new(username: "Bill Weasley", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091713/Bill.jpg")
potter11 = User.new(username: "Gideon Prewett", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091775/Gideon.jpg")
potter12 = User.new(username: "Zacharias Smith", password: "password", avatar_url: "https://res.cloudinary.com/djvxjp2tv/image/upload/v1529091860/zacharias.jpg")
potters = []
potters.push(potter1)
potters.push(potter2)
potters.push(potter3)
potters.push(potter4)
potters.push(potter5)
potters.push(potter6)
potters.push(potter7)
potters.push(potter8)
potters.push(potter9)
potters.push(potter10)
potters.push(potter11)
potters.push(potter12)
potters.map(&:save!)
Server.new(name: "Person of Interest", avatar_url: "poi.jpg", owner_id: demo.id);
hogwarts = Server.new(name: "Harry Potter", avatar_url: "hogwarts.jpg" , owner_id: potter1.id);
hogwarts.save!
ServerMembership.create!(user_id: potter1.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter2.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter3.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter4.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter5.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter6.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter7.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter8.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter9.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter10.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter11.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: potter12.id, server_id: hogwarts.id);
ServerMembership.create!(user_id: demo.id, server_id: hogwarts.id);

ch1 = Channel.new(name: "General", server_id: hogwarts.id);
ch2 = Channel.new(name: "Gryffindor", server_id: hogwarts.id);
ch3 = Channel.new(name: "Slytherin", server_id: hogwarts.id);
ch4 = Channel.new(name: "Hufflepuff", server_id: hogwarts.id);
ch5 = Channel.new(name: "Ravenclaw", server_id: hogwarts.id);
channels = []
channels.push(ch1)
channels.push(ch2)
channels.push(ch3)
channels.push(ch4)
channels.push(ch5)
channels.map(&:save!)

200.times do
  idx = rand(0..potters.length - 1)
  channel = rand(0..channels.length - 1)
  Message.create!(user_id: potters[idx].id, channel_id: channels[channel].id, text: Faker::HarryPotter.quote)
end
