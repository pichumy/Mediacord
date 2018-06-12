import { connect } from 'react-redux';
import { fetchUserList } from '../../actions/server_actions';
import UserList from './user_list';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  serverId: ownProps.match.params.id,
  users: state.entities.userList
})

const mapDispatchToProps = dispatch => ({
  fetchUserList: (serverId) => dispatch(fetchUserList(serverId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
