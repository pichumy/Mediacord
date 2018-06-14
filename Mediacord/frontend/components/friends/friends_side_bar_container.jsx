import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import FriendsSideBar from './friends_side_bar';
import { fetchPrivateChannels } from '../../actions/server_actions';


const mapStateToProps = (state, ownProps) => ({
  private_channels: Object.keys(state.entities.private_channels).map(idx => state.entities.private_channels[idx]),
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal("Users")),
  fetchPrivateChannels: () => dispatch(fetchPrivateChannels()),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsSideBar));
