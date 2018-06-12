import React from 'react';

const Message = ({ message, userList }) => {
  let user = userList[message.user_id];
  let styles = {
    userAvatar: {
      backgroundImage: user.avatar_url,
    }
  }
  return (
    <div className="message-container">
      <div>{user.username}</div>
      <br></br>
      <div style={styles.userAvatar}></div>
      <div className="message-text"> {message.text}</div>
    </div>
  )
}
export default Message;
