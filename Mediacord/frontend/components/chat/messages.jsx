import React from 'react';
import Loading from '../loading';

const Message = ({ message, userList }) => {
  let user = userList[message.user_id];
  if (!user){
    return(
      <Loading />
    )
  }
  return (
    <div>
      <div className="message-group">
        <img src={user.avatar_url}
          className="message-avatar">
        </img>
        <div className="body">
          <h2 className="no-padding-margin">
            <div className="message-username">
              {user.username}
              <span className="timestamp">
                {message.time_stamp}
              </span>
            </div>
          </h2>
          <div className="message-text">
            <div className="markup">
              {message.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Message;
