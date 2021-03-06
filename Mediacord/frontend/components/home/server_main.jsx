import React from 'react';
import Loading from '../loading';
import ServerNav from '../servers/server_nav_container';
import ChannelNav from '../channels/channel_nav_container';
import Nav from '../chat/nav';

class ServerMain extends React.Component {

  constructor(props){
    super(props);
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
        <ChannelNav />
        <Nav />
      </div>
    )
  }
}


export default ServerMain;
