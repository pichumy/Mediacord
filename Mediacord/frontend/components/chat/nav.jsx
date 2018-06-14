import React from 'react';
import ChatLog from './chat_log_container';
import UserList from './user_list_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends React.Component {


  render(){
    let name = ""
    if(this.props.channel){
      name = this.props.channel.name;
    }
    return(
      <div className="main-nav">
        <div className="nav-bar">
          <div className="text"># {name}</div>
        </div>
        <ChatLog />
        <UserList />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channel_id]
})

export default withRouter(connect(mapStateToProps)(Nav));
