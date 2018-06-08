import { connect } from 'react-redux';
import { logoutSession } from '../../actions/session_actions';
import ServerMain from './server_main';

const mapStateToProps = (state, ownProps) => ({
  loading: state.ui.loading.loading
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logoutSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerMain);
