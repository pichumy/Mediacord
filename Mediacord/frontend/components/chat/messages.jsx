import React from 'react';

class Message extends React.Component {

  componentDidMount(){
    let logId = this.props.logs[this.props.channelId].id;
    this.props.fetchMessages(logId);
  }


  render(){
    return (
      <div className="message-log">Message Log goes here</div>
    )
  }
}

export default Message;
