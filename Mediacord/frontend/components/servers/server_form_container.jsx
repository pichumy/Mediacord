import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({
  createServer: (serverData) => dispatch(createServer(serverData)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));
