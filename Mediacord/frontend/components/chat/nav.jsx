import React from 'react';
import ChatLog from './chat_log';
import UserList from './user_list';

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
