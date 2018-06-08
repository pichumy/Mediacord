import React from 'react';
import Channel from './channel';
import UserSettingsBar from './user_settings_bar';
import ChannelSettingsBar from './channel_settings_bar_container';

class ChannelNav extends React.Component{
  render(){
    return (
      <div className="channel-nav">
        <ChannelSettingsBar />
        <div className="channels">
          Channels Go here
        </div>
        <UserSettingsBar signOut={this.props.signOut}/>
      </div>
    )
  }
}

export default ChannelNav;
