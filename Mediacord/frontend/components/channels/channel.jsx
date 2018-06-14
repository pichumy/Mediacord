import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Channel = ({ channel, history, match}) => {
  let classN = "channel-text";
  let container = ""
  let LinkURL = `/servers/${match.params.id}/channels/${channel.id}`;
  if(channel.id == match.params.channel_id){
    classN = "channel-text selected-text";
    container = "selected";
  }
  return(
    <div className="channel-wrapper">
      <Link to={LinkURL}>
        <div className={container}>
          <div className={classN}> # {channel.name} </div>
        </div>
      </Link>
    </div>
  )
}

export default withRouter(Channel);
