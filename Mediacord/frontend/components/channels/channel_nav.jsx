import React from 'react';
import Channel from './channel';
import UserSettingsBar from './user_settings_bar';
import ChannelSettingsBar from './channel_settings_bar_container';
import Loading from '../loading';

class ChannelNav extends React.Component{

  constructor(props){
    super(props);
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

    if(this.props.match.params.id && this.props.match.params.id !== nextProps.match.params.id){
      nextProps.fetchChannels(nextProps.match.params.id);
    }
    else if(Object.keys(nextProps.channels).length > 0){
      if(!nextProps.match.params.channel_id){
        let idx = Object.keys(nextProps.channels)[0];
        let correct_url = `/servers/${nextProps.match.params.id}/channels/${nextProps.channels[idx].id}`;
        this.props.history.push(correct_url);
      }
    }
  }

  render(){

    // if(this.props.loading){
    //   <Loading />
    // }
    const channels = Object.values(this.props.channels).map( (channel) => {
      return <Channel channel={channel} key={channel.id}/>
    });
    return (
      <div className="channel-nav direction-column">
        <ChannelSettingsBar />
        <div className="channels">
          {channels}
        </div>
        <UserSettingsBar />
      </div>
    )
  }
}

export default ChannelNav;
