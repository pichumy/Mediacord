import React from 'react';
import MessageInput from './message_input';
import Messages from './messages_container';

class ChatLog extends React.Component {

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.channelId !== 0){
  //     nextProps.fetchLog(nextProps.channelId);
  //   }
  // }

  componentDidMount(){
    this.props.fetchLog(this.props.channelId);
  }

  render (){
    return(
      <div className="chat-log">
        <Messages />
        <MessageInput />
      </div>
    )
  }
}

export default ChatLog;
