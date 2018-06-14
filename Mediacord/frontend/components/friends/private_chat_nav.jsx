import React from 'react'
import ChatLog from '../chat/chat_log_container';
import UserList from '../chat/user_list_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class PrivateChatNav extends React.Component {
  render(){
    if(this.props.match.params.channel_id){
      return(
        <div className="main-nav">
          <div className="nav-bar">
            <button className="btn" onClick={this.props.openModal}> Invite </button>
          </div>
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

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal("Invite")),
})

export default withRouter(connect(null, mapDispatchToProps)(PrivateChatNav));
