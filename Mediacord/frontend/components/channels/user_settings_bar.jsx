import React from 'react';
import { connect } from 'react-redux';
import Loading from '../loading';

class UserSettingsBar extends React.Component {

  render(){
    const { user } = this.props;
    if (!user){
      return (
        <Loading />
      )
    }
    console.log(this.props);
    return(
      <div className="user-settings-bar">
        <div className="avatar-image">
          <img src={user.avatar_url}></img>
        </div>
        <div id="username" className="username">
          {user.username}
        </div>
        <button
          onClick={this.props.signOut}>
          Temporary Sign Out
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.session
})

export default connect(mapStateToProps)(UserSettingsBar);
