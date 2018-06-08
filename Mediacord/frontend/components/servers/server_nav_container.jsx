import { connect } from 'react-redux';
import ServerNav from './server_nav';
import { fetchServersForUser } from '../../actions/server_actions';


const mapStateToProps = (state, ownProps) => ({
  servers: state.entities.servers
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(fetchServers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerNav);
