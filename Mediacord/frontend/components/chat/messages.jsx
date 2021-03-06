import React from 'react';
import Loading from '../loading';

const Message = ({ message, userList }) => {
  let user = userList[message.user_id];
  if (!user){
    return(
      <Loading />
    )
  }
  let content = message.text;
  if(message.image){
    // content = cloudinary.image(message.text, {width: 300, height: 100, crop: "scale"})
    content = <img src={message.text}></img>
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
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Message;
