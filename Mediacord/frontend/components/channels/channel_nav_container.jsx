import { connect } from 'react-redux';
import { logoutSession } from '../../actions/session_actions';
import { channelsSelector } from '../../reducers/selectors';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelNav from './channel_nav';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
  channels: channelsSelector(state, ownProps.match.params.id),
  loading: state.ui.loading.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelNav));
