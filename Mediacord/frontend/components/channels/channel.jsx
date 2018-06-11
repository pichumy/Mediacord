import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Channel = ({ switchChannel, channel, selectedChannel, history, match}) => {
  let classN = "channel-text";
  let container = ""
  let serverId = match.params.id;
  let LinkURL = `/servers/${serverId}/channels/${channel.id}`;
  if(channel.id == selectedChannel){
    classN = "channel-text selected-text";
    container = "selected";
  }
  return(
    <div className="channel-wrapper" onClick={switchChannel(channel.id)}>
      <Link to={LinkURL}>
        <div className={container}>
          <div className={classN}> # {channel.name} </div>
        </div>
      </Link>
    </div>
  )
}

export default withRouter(Channel);
