import { connect } from 'react-redux';
import { createUser, createNewSession } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
  loading: state.loading.loading,
  errors: state.errors.sessionErrors,
  formType: "Signup",
  haveAccount: "Already have an account?",
  welcome: "Create an account"
});

const mapDispatchToProps = dispatch => ({
  submitForm: (userForm) => dispatch(createUser(userForm)),
  demoForm: (userForm) => dispatch(createNewSession(userForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
