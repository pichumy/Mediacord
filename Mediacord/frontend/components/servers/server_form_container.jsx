import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer, joinServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { fetchServerByName } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  servers: state.search.servers,
  existingServers: state.entities.servers,
  errors: state.errors.servers
})

const mapDispatchToProps = dispatch => ({
  createServer: (serverData) => dispatch(createServer(serverData)),
  closeModal: () => dispatch(closeModal()),
  fetchServerByName: (name) => dispatch(fetchServerByName(name)),
  joinServer: (serverId) => dispatch(joinServer(serverId)),
  fetchServers: () => dispatch(fetchServers()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));
