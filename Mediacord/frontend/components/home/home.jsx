import React from 'react';
import Loading from '../loading';
import ServerNav from '../servers/server_nav_container';
import ChannelNav from '../channels/channel_nav_container';
import Nav from '../chat/nav';

const Home = (props) => {
  if(props.loading){
    return(
      <Loading />
    )
  }
  return(
    <div className="home">
      <ServerNav />
      <ChannelNav signOut={props.signOut}/>
      <Nav />
    </div>
  )
}


export default Home;
