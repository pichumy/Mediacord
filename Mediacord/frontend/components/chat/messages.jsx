import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message-container">
      <div className="user-avatar"> Avatar placeholder </div>
      <div className="message-text"> {message.text}</div>
    </div>
  )
}
export default Message;
