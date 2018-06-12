import { connect } from 'react-redux';
import ServerNav from './server_nav';
import { fetchServersForUser } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  servers: state.entities.servers
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  openModal: () => dispatch(openModal('Server'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerNav));
