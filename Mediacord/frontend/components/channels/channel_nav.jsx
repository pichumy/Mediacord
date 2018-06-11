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

    if(this.props.match.params.id !== nextProps.match.params.id){
      nextProps.fetchChannels(nextProps.match.params.id);
    }
    else if(Object.keys(nextProps.channels).length > 0){
      let channel_id;
      if(!nextProps.match.params.channel_id){
        let idx = Object.keys(nextProps.channels)[0];
        channel_id = nextProps.channels[idx].id
        let correct_url = `/servers/${nextProps.match.params.id}/channels/${channel_id}`;
        this.props.history.push(correct_url);
      }else{
        channel_id = nextProps.match.params.channel_id;
      }
      this.setState({
        selectedChannel: channel_id
      })
    }

  }

  render(){

    // if(this.props.loading){
    //   <Loading />
    // }
    const channels = Object.values(this.props.channels).map( (channel) => {
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
