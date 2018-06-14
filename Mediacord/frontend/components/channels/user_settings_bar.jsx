import React from 'react';
import { connect } from 'react-redux';
import Loading from '../loading';
import { logoutSession} from '../../actions/session_actions';

class UserSettingsBar extends React.Component {

  render(){
    const { user } = this.props;
    if (!user){
      return (
        <Loading />
      )
    }
    // TODO: Small refactor to no longer store so much information in session
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

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logoutSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsBar);
