import React from 'react';

class UserSettingsBar extends React.Component {

  render(){
    return(
      <div className="user-settings-bar">
        <button onClick={this.props.signOut}>Temporary Sign Out</button>
      </div>
    )
  }
}

export default UserSettingsBar;
