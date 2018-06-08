import React from 'react';
import MessageInput from './message_input';
class ChatLog extends React.Component {
  render (){
    return(
      <div className="chat-log">
        <div className="message-log">Message Log goes here</div>
        <MessageInput />
      </div>
    )
  }
}

export default ChatLog;
