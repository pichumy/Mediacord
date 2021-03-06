import { connect } from 'react-redux';
import { createNewSession } from '../../actions/session_actions';
import { resetErrors } from '../../actions/error_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
  loading: state.ui.loading.loading,
  errors: state.errors.sessionErrors,
  formType: "Login",
  forgotPassword: "Forgot your password?",
  needAccount: "Need an account?",
  register: "Register",
  welcome: "Welcome Back!",
  welcome2: "We're so excited to see you again!"
});

const mapDispatchToProps = dispatch => ({
  submitForm: (userForm) => dispatch(createNewSession(userForm)),
  demoForm: (userForm) => dispatch(createNewSession(userForm)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
