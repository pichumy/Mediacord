# README

# Mediacord

[Live Demo](https://mediacord.herokuapp.com/)

Mediacord is a live chat application, inspired by Discord. It uses a Rails/PostgreSQL backend
with React.js and Redux on the frontend.

The project was designed and built within a two-week timeframe, although it may receive updates as time allows.

# Features

* Secure frontend to backend user authentication using BCrypt
* Users can type messages to other users live, through the use of Web Sockets and action cable.
* Users can set their own avatars, as well as post images into the chat rooms.
* Users can create their own servers, as well as start private conversations with other users.

## Live Chat

Users can type messages into a chat channel, and have their message displayed almost immediately to any other users who are currently viewing that channel.

![](https://res.cloudinary.com/djvxjp2tv/image/upload/v1529097575/Screen_Shot_2018-06-15_at_2.19.03_PM.png)

This is accomplished by connecting users to a web socket upon entering a channel, and having that web socket run broadcast commands whenever a new message is sent to that channel. Web sockets are set up through ActionCable. In order to avoid fetching data from the server every single time, the broadcast command only triggers a change in the redux state, leading to fast and smooth updates.


```
  message_input.jsx
  createSocket() {
    // let cable = Cable.createConsumer('ws://localhost:3000/cable');
    // let cable = Cable.createConsumer('wss://mediacord.herokuapp.com/cable');
    let cable = ActionCable.createConsumer();
    this.cable = cable;
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel',
      id: `${this.props.channelId}`
    }, {
  ...
```
```
    chat_channel.rb
    def subscribed
      stream_from "chat_#{params[:id]}"
    end
```
```
  message_input.jsx
  create: function(text, channelId, userId, image) {
    this.perform('create', {
      text: text,
      channel_id: channelId,
      user_id: userId,
      image: image
    });
  },
  ...
```
```
  chat_channel.rb
  def create(opts)
    Message.create(
      text: opts.fetch('text'),
      user_id: opts.fetch('user_id'),
      channel_id: opts.fetch('channel_id'),
      image: opts.fetch('image')
    )
  end
```
```
  messages_controller.rb
  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end
```
```
  message.rb

  after_create_commit do
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end
```
```
  ChatMessageCreationEventBroadcastJob.rb
  def perform(message)
    ActionCable
      .server
      .broadcast("chat_#{message.channel_id}",
        command: "new_message",
        message: {
          id: message.id,
          user_id: message.user_id,
          channel_id: message.channel_id,
          text: message.text,
          image: message.image
        }
      )
  end
```

```
  message_input.jsx
    received: ({ command, message }) => {
      switch(command){
        case "new_message":
          this.props.receiveMessage(message)
 ...
```
```
  message_actions.js

  export const receiveMessage = (message) => {
    return (
      { type: RECEIVE_MESSAGE, message}
    )
  }
```
```
  messages_reducer.js

  case RECEIVE_MESSAGE:
    return Object.assign({}, state, {[action.message.id]: action.message});
  -> re-render
```



## Images

Images are handled through the cloudinary widget. Typing a link with http:// in it will cause the application to attempt to create it as an image. This can be fixed later by changing the condition to search for .png or .jpg tags.

## Project Design

Mediacord was designed as a copy of discord with the goal of learning how to code live interactivity between users. Many mistakes were made in the initial stages of this project, but these mistakes helped me understand a lot of the in-depth reasoning behind why things are done in certain ways, as well as better ways to approach problems in the future. The project may be refactored at a later date.

## Technologies

Rails was chosen due to the ease of set up. This project was done in an extremely short time frame, and scalability was not a large focus.

Redux was chosen to allow for quicker reloading on the front end, allowing users to see changes immediately, which is extremely important in an app whose purpose is live interaction.

## Additional Resources
  (Note: These files were made prior to starting the project! A lot has changed!)
+ [Schema](https://github.com/pichumy/Mediacord/wiki/Database-Schema)

+ [Routes](https://github.com/pichumy/Mediacord/wiki/Routes)

+ [Component Hierarchy with Wireframes](https://github.com/pichumy/Mediacord/wiki/Component-Hierarchy-with-Wireframes)

## Future Features

Add more action cable jobs for more connectivity goodness! A good example would be for notifications. It also took a while before I truly understood the power of redux. Refactoring of some of the redux cycles created earlier on will help make the application run even faster. 
