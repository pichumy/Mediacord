import React from 'react';
import Loading from '../loading';
import UserItem from './user_item';
import ActionCable from 'actioncable';

class UserList extends React.Component {

  componentDidMount(){
    this.props.fetchUserList(this.props.serverId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.serverId && this.props.serverId !== nextProps.serverId){
      nextProps.fetchUserList(nextProps.serverId);
    }
  }


  render(){
    if(this.props.users.length === 0){
      return (
        <Loading />
      )
    }
    let online = this.props.onlineUsers.map(user => {
      return <UserItem user={user} key={user.id} />
    });
    let offline = this.props.offlineUsers.map(user => {
      return <UserItem user={user} key={user.id} />
    });

    return(
      <div className="user-list">
        <div className="user-header">Online—{online.length}</div>
        { online }
        <div className="user-header">Offline—{offline.length}</div>
        { offline }
      </div>
    )
  }
}

export default UserList;
