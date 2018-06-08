import React from 'react';

const Channel = ({ channel, selectedChannel, idx, switchChannel}) => {
  let classN = "channel-text";
  let container = ""
  if(idx === selectedChannel){
    classN = "channel-text selected-text";
    container = "selected"
  }
  return(
    <div className="channel-wrapper" onClick={switchChannel({idx})}>
      <div className={container}>
        <div className={classN}> # {channel.name} </div>
      </div>
    </div>
  )
}

export default Channel;
