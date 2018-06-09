import { connect } from 'react-redux';
import ChatLog from './chat_log';
import { fetchLog } from '../../actions/log_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  log: state.entities.logs,
  channelId: ownProps.location.pathname.substring(20),
})

const mapDispatchToProps = dispatch => ({
  fetchLog: (channelId) => dispatch(fetchLog(channelId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatLog));
