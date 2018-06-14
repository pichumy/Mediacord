import React from 'react';
import UserSettingsBar from '../channels/user_settings_bar';
import { Link } from 'react-router-dom';
import PrivateChannels from './private_channels';

class FriendsSideBar extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPrivateChannels();
  }


  render(){
    let icon = "FriendsHome";
    if (this.props.match.path === '/home'){
      icon = "FriendsHome selected";
    }

    const channels = this.props.private_channels.map(channel => {
      return(
        <PrivateChannels
          channel={channel}
          key={channel.id} />
      )
    })

    return(
      <div className="channel-nav">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Find or start a conversation"
            onClick={this.props.openModal}>
          </input>
        </div>
        <div style={{width: '100%', height: '20px'}}></div>
        <div className="channels">
          <div className="channel-wrapper">
            <Link to="/home">
              <div className={icon}> Friends </div>
            </Link>
          </div>
          <h1> Direct Messages </h1>
          { channels }
        </div>
        <UserSettingsBar />
      </div>
    )
  }
}

export default FriendsSideBar;
