import { connect } from 'react-redux';
import UserSearch from './user_search';
import { fetchUserByName } from '../../actions/search_actions';
import { createPrivateServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
  users: state.search.users,
  channels: Object.keys(state.entities.private_channels).map(idx => state.entities.private_channels[idx])
})

const mapDispatchToProps = dispatch => ({
  fetchUserByName: (name) => dispatch(fetchUserByName(name)),
  createPrivateServer: (name, userid) => dispatch(createPrivateServer(name, userid)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));
