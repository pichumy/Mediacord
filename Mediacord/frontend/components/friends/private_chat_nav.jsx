import React from 'react'
import ChatLog from '../chat/chat_log_container';
import UserList from '../chat/user_list_container';
import { withRouter } from 'react-router-dom';

class PrivateChatNav extends React.Component {
  render(){
    if(this.props.match.params.channel_id){
      return(
        <div className="main-nav">
          <div className="nav-bar"></div>
          <ChatLog />
          <UserList />
        </div>
      )
    }
    return(
      <div className="main-nav">
        <div className="nav-bar"></div>
      </div>
    )
  }
}

export default withRouter(PrivateChatNav);
