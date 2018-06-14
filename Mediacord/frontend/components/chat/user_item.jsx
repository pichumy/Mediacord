import React from 'react'

const UserItem = ({ user }) => {
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
  }; 
  return (
    <div key={user.id} className="userlist-item">
      <div style={styles.img}></div>
      <div className="username">{user.username}</div>
    </div>
  )
}

export default UserItem;
