import React from 'react';
import MessageInput from './message_input';
import Messages from './messages';
import Loading from '../loading';

class ChatLog extends React.Component {

  componentWillReceiveProps(nextProps){
    if(this.props.channelId !== nextProps.channelId && nextProps.channelId !== undefined){
      nextProps.fetchMessages(nextProps.channelId);
    }
  }


  render (){
    if(this.props.messages.length === 0){
      return (
        <Loading />
      )
    }
    let messageItems = this.props.messages.array.map(message => {
      return (
        <Messages message={message} key={message.id} />
      )
    })
    return(
      <div className="chat-log">
        <div className="message-log">
          {messageItems}
        </div>
        <MessageInput channelId={this.props.channelId} userId={this.props.current_user} fetchMessages={this.props.fetchMessages}/>
      </div>
    )
  }
}

export default ChatLog;
