import React from 'react';

class MessageInput extends React.Component {
  render(){
    return (
      <div className="message-input">
        <input type="text"/>
        <button> Submit</button>
      </div>
    )
  }
}

export default MessageInput;
