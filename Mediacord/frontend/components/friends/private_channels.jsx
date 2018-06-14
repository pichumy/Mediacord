import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const PrivateChannels = ({ channel, match }) => {
  let LinkURL = `/home/${channel.server_id}/${channel.id}`;
  let classN = "channel-text"
  let container = "message-header"
  if(channel.id == match.params.channel_id){
    classN = "channel-text selected-text";
    container = "message-header selected";
  }
  return(
      <div className="channel-wrapper">
        <Link to={LinkURL}>
          <div className={container}>
            <div className="avatar-image">
              <img src={channel.avatar_url}></img>
            </div>
            <div className={classN}>{channel.name}</div>
          </div>
        </Link>
      </div>
  )
}

export default withRouter(PrivateChannels);
