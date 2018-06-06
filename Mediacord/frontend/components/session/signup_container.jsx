import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: "Signup",
  haveAccount: "Already have an account?",
  welcome: "Create an account"
});

const mapDispatchToProps = dispatch => ({
  submitForm: (userForm) => dispatch(createUser(userForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
