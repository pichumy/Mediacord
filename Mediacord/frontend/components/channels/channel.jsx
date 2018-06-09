import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Channel = ({ switchChannel, channel, selectedChannel, idx, history, location }) => {
  let classN = "channel-text";
  let container = ""
  let serverId = location.pathname.substring(9, 10);
  let LinkURL = `/servers/${serverId}/channels/${channel.id}`;
  if(idx === selectedChannel){
    classN = "channel-text selected-text";
    container = "selected";
  }
  return(
    <div className="channel-wrapper" onClick={switchChannel(idx)}>
      <Link to={LinkURL}>
        <div className={container}>
          <div className={classN}> # {channel.name} </div>
        </div>
      </Link>
    </div>
  )
}

export default withRouter(Channel);
