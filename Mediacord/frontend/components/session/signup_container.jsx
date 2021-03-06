import { connect } from 'react-redux';
import { createUser, createNewSession} from '../../actions/session_actions';
import { resetErrors } from '../../actions/error_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
  loading: state.ui.loading.loading,
  errors: state.errors.sessionErrors,
  formType: "Signup",
  haveAccount: "Already have an account?",
  welcome: "Create an account"
});

const mapDispatchToProps = dispatch => ({
  submitForm: (userForm) => dispatch(createUser(userForm)),
  demoForm: (userForm) => dispatch(createNewSession(userForm)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
