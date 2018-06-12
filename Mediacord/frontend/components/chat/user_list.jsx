import React from 'react';
import Loading from '../loading';
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
    return(
      <div className="user-list">
        <div className="user-header">Users</div>
        {
          Object.values(this.props.users).map(user => {
            let styles = {
              img: {
                backgroundImage: `url('${user.avatar_url}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50%',
                backgroundSize: "50px 50px",
                overflow: 'hidden',
                borderRadius: '50%',
                height: '36px',
                width: '36px',
                padding: '8px',
                alignItems: 'center'
              }
            }
            return (
              <div key={user.id} className="userlist-item">
                <div style={styles.img}></div>
                <div className="username">{user.username}</div>

              </div>
            )
          })
        }
      </div>
    )
  }
}

export default UserList;
