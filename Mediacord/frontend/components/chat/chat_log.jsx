import React from 'react';
import MessageInput from './message_input_container';
import Messages from './messages';
import Loading from '../loading';

class ChatLog extends React.Component {

  componentDidMount(){
    if(this.props.channelId){
      this.props.fetchMessages(this.props.channelId);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.channelId && this.props.channelId !== nextProps.channelId){
      nextProps.fetchMessages(nextProps.channelId);
    }
  }

  render (){
    if(this.props.messages.length === 0 || Object.keys(this.props.userList).length === 0){
      return (
        <Loading />
      )
    }
    let messageItems = this.props.messages.array
      .sort( (a, b) => {
        return a.id - b.id;
      })
      .reverse()
      .map(message => {
        return (
          <Messages message={message} key={message.id} userList={this.props.userList}/>
        )
      })
    return(
      <div className="chat-log">
        <div className="message-log">
          {messageItems}
        </div>
        <MessageInput
          channelId={this.props.channelId}
          userId={this.props.current_user}
          fetchMessages={this.props.fetchMessages}/>
      </div>
    )
  }
}

export default ChatLog;
