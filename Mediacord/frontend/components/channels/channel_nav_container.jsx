import { connect } from 'react-redux'
import { fetchChannels } from '../../actions/channel_actions';
import ChannelNav from './channel_nav';
import { channelsSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  channels: channelsSelector(state, ownProps.serverId),
  loading: state.ui.loading.loading,
  serverId: ownProps.serverId
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelNav);
