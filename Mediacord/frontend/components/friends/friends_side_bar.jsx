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
      <div className="channel-nav direction-column">
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
              <div className={icon}>
                <svg name="PersonWaving" className="PersonWaving" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                Friends
              </div>
            </Link>
          </div>
          <h1 className="user-header"> Direct Messages </h1>
          { channels }
        </div>
        <UserSettingsBar />
      </div>
    )
  }
}

export default FriendsSideBar;
