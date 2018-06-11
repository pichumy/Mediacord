import { connect } from 'react-redux';
import ChatLog from './chat_log';
import { fetchMessages } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  messages: state.entities.messages,
  channelId: ownProps.location.pathname.substring(20),
  current_user: state.session.id
})

const mapDispatchToProps = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatLog));
