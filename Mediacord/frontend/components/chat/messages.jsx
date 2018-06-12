import React from 'react';

const Message = ({ message, userList }) => {
  let user = userList[message.user_id];
  let styles = {
    userAvatar: {
      backgroundImage: user.avatar_url,
    }
  }
  return (
    <div className="message-item-container">
      <div className="message-avatar">
        <div style={styles.userAvatar}></div>
      </div>
      <div className="message-author">
        {user.username}
      </div>
      <div className="message-text">
        {message.text}
      </div>
    </div>
  )
}
export default Message;
