import React from 'react';
import Loading from '../loading';
import ServerNav from '../servers/server_nav_container';
import ChannelNav from '../channels/channel_nav_container';
import Nav from '../chat/nav';

class ServerMain extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   defaultChannel = 1,
    // }
  }
  render(){
    if(this.props.loading){
      return(
        <Loading />
      )
    }
    return(
      <div className="home">
        <ServerNav />
        <ChannelNav signOut={this.props.signOut} serverId={this.props.match.params.id} />
        <Nav />
      </div>
    )
  }
}


export default ServerMain;
