import { connect } from 'react-redux';
import ChatLog from './chat_log';
import { fetchMessages } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import { messageSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  messages: messageSelector(state),
  channelId: ownProps.match.params.channel_id,
  current_user: state.session.id,
  userList: state.entities.userList
})

const mapDispatchToProps = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatLog));
