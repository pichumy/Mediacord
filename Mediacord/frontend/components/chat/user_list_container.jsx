import { connect } from 'react-redux';
import { fetchUserList } from '../../actions/server_actions';
import UserList from './user_list';
import { withRouter } from 'react-router-dom';
import {onlineUsers, offlineUsers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  serverId: ownProps.match.params.id,
  users: state.entities.userList,
  onlineUsers: onlineUsers(state),
  offlineUsers: offlineUsers(state)
})

const mapDispatchToProps = dispatch => ({
  fetchUserList: (serverId) => dispatch(fetchUserList(serverId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
