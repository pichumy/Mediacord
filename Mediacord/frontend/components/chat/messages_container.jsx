import { connect } from 'react-redux';
import Message from './messages';
import { fetchMessages } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) =>({
  logs: state.entities.logs, 
  messages: state.entities.messages,
  channelId: ownProps.location.pathname.substring(20)
})

const mapDispatchToProps = dispatch => ({
  fetchMessages: (logId) => dispatch(fetchMessages(logId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message))
