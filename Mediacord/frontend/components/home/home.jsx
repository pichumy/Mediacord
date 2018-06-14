import React from 'react';
import Loading from '../loading';
import ServerNav from '../servers/server_nav_container';
import FriendsSideBar from '../friends/friends_side_bar_container';
import PrivateChatNav from '../friends/private_chat_nav';

const Home = (props) => {
  if(props.loading){
    return(
      <Loading />
    )
  }
  return(
    <div className="home">
      <ServerNav />
      <FriendsSideBar />
      <PrivateChatNav />
    </div>
  )
}


export default Home;
