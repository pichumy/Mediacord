import React from 'react';
import ChatLog from './chat_log_container';
import UserList from './user_list_container';

class Nav extends React.Component {


  render(){
    return(
      <div className="main-nav">
        <div className="nav-bar"></div>
        <ChatLog />
        <UserList />
      </div>
    )
  }
}

export default Nav;
