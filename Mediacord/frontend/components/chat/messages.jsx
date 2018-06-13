import React from 'react';

const Message = ({ message, userList }) => {
  let user = userList[message.user_id];

  console.log()
  return (
    <div className="message-item-container">
      <div className="message-header">
        <div className="avatar-image">
          <img src={user.avatar_url}></img>
        </div>
        <div className="message-author">
          {user.username}
        </div>
      </div>
      <div className="message-text">
        {message.text}
      </div>
    </div>
  )
}
export default Message;
