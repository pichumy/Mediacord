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

This portion of the code is located in the React Component. It attempts to subscribe to a channel streaming from the websocket / cable on the backend.
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
This is on the Rails backend. It starts listening / streaming on certain channels from the backend.
```
    chat_channel.rb
    def subscribed
      stream_from "chat_#{params[:id]}"
    end
```
This is a function defined on the frontend. It defines a function called create which can be called inside the React component which will perform the "create" function defined on the channel in the backend.
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
Here is where the "create" command is defined on the backend.
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
Message.create triggers an action in the model. It passes the newly created message to the EventBroadcastJob

```
  message.rb

  after_create_commit do
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end
```
The EventBroadcastJob is what is used to send data back to the front end and notify all subscribers to a certain channel to update.
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
The frontend receives the data from the EventBroadcastJob here. It then triggers activity on the front end based on the type of command defined by the backend. (In this case, it will update the redux store which will trigger a re-render)
```
  message_input.jsx
    received: ({ command, message }) => {
      switch(command){
        case "new_message":
          this.props.receiveMessage(message)
 ...
```
This is the action that will be dispatched.
```
  message_actions.js

  export const receiveMessage = (message) => {
    return (
      { type: RECEIVE_MESSAGE, message}
    )
  }
```
This is the reducer that receives that action, updating the store, and triggering the re-render.
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
