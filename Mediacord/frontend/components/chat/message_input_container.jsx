import { connect } from 'react-redux';
import MessageInput from './message_input';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../actions/message_actions';
import { joinServer } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channel_id,
  userId: state.session.id,
  private_channel: state.entities.private_channels[ownProps.match.params.channel_id],
  messages: state.entities.messages,
  serverId: ownProps.match.params.id
})

const mapDispatchToProps = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  joinServer: (serverId, userId) => dispatch(joinServer(serverId, userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageInput));
