import React from 'react';
import Channel from './channel';
import UserSettingsBar from './user_settings_bar';
import ChannelSettingsBar from './channel_settings_bar_container';
import Loading from '../loading';

class ChannelNav extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedChannel: 0
    }
    this.switchChannel = this.switchChannel.bind(this);
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.id);
  }

  switchChannel(idx){
    return (e) => this.setState({
      selectedChannel: idx
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.channels.length > 0 && nextProps.location.pathname.length < 12){
      let channel_id = nextProps.channels[this.state.selectedChannel].id;
      let correct_url = `/servers/${nextProps.match.params.id}/channels/${channel_id}`;
      this.props.history.push(correct_url);
    }
  }

  render(){

    // if(this.props.loading){
    //   <Loading />
    // }
    const channels = this.props.channels.map( (channel, idx) => {
      return <Channel channel={channel} key={channel.id} selectedChannel={this.state.selectedChannel} idx={idx} switchChannel={this.switchChannel}/>
    });

    return (
      <div className="channel-nav">
        <ChannelSettingsBar />
        <div className="channels">
          {channels}
        </div>
        <UserSettingsBar signOut={this.props.signOut}/>
      </div>
    )
  }
}

export default ChannelNav;
