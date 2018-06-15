import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const PrivateChannels = ({ channel, match }) => {
  let LinkURL = `/home/${channel.server_id}/${channel.id}`;
  let classN = "channel-text blue"
  let container = "userlist-item"
  if(channel.id == match.params.channel_id){
    classN = "channel-text selected-text blue";
    container = "userlist-item selected";
  }
  let namesArray = channel.users.map(user => user.username);
  if (namesArray.length > 2){
    namesArray = namesArray.slice(0,2);
    namesArray.push('...');
  }
  let names = namesArray.join(', ');

  return(
      <div className="channel-wrapper">
        <Link to={LinkURL}>
          <div className={container}>
            <div className="avatar-image">
              <img src={channel.avatar_url}></img>
            </div>
            <div className="ellipsis">
              <div className={classN}>{names}</div>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default withRouter(PrivateChannels);
