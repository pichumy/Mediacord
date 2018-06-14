import { connect } from 'react-redux';
import { logoutSession } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = (state, ownProps) => ({
  loading: state.ui.loading.loading,
})



const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logoutSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
