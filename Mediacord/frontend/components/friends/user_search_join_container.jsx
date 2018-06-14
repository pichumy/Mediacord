import { connect } from 'react-redux';
import UserSearch from './user_search'
import { fetchUserByName } from '../../actions/search_actions';;
import { withRouter } from 'react-router-dom';
import { joinPrivateServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  users: state.search.users,
  type: "Join",
  text: "Invite"
})

const mapDispatchToProps = dispatch => ({
  fetchUserByName: (name) => dispatch(fetchUserByName(name)),
  closeModal: () => dispatch(closeModal()),
  joinPrivateServer: (serverId, userId) => dispatch(joinPrivateServer(serverId, userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));
