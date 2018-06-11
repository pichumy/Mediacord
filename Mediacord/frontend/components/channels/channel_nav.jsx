import React from 'react';
import Channel from './channel';
import UserSettingsBar from './user_settings_bar';
import ChannelSettingsBar from './channel_settings_bar_container';
import Loading from '../loading';

class ChannelNav extends React.Component{

  constructor(props){
    super(props);
    let channel;
    this.state = {
      selectedChannel: 0
    }
    this.switchChannel = this.switchChannel.bind(this);
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.id);
  }

  switchChannel(channelId){
    return (e) => this.setState({
      selectedChannel: channelId
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.channels.length > 0 && nextProps.location.pathname.length < 12){
      let channel_id = nextProps.channels[this.state.selectedChannel].id;
      let correct_url = `/servers/${nextProps.match.params.id}/channels/${channel_id}`;
      this.props.history.push(correct_url);
      this.setState({
        selectedChannel: channel_id
      })
    }
  }

  render(){

    // if(this.props.loading){
    //   <Loading />
    // }
    const channels = this.props.channels.map( (channel, idx) => {
      return <Channel channel={channel} key={channel.id} selectedChannel={this.state.selectedChannel} switchChannel={this.switchChannel}/>
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
