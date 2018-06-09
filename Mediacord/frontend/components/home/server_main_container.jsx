import { connect } from 'react-redux';
import { logoutSession } from '../../actions/session_actions';
import ServerMain from './server_main';
import { channelsSelector } from '../../reducers/selectors';
import { fetchChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  channels: channelsSelector(state, ownProps.match.params.id),
  loading: state.ui.loading.loading,
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logoutSession()),
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerMain);
