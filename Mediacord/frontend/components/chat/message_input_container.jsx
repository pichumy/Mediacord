import { connect } from 'react-redux';
import MessageInput from './message_input';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../actions/message_actions';
import { joinServer, fetchUserList } from '../../actions/server_actions';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channel_id,
  current_user: state.session,
  private_channel: state.entities.private_channels[ownProps.match.params.channel_id],
  messages: state.entities.messages,
  serverId: ownProps.match.params.id
})

const mapDispatchToProps = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  joinServer: (serverId, userId) => dispatch(joinServer(serverId, userId)),
  fetchUserList: (serverId) => dispatch(fetchUserList(serverId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageInput));
