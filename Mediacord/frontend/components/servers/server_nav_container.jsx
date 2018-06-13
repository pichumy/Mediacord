import { connect } from 'react-redux';
import ServerNav from './server_nav';
import { fetchServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  servers: Object.keys(state.entities.servers).map(idx => state.entities.servers[idx])
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  openModal: () => dispatch(openModal('Server'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerNav));
