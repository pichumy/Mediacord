import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Logo from '../logo';
import Loading from '../loading';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      sorry: "",
      error: {
        username: "",
        password: "",
        general: ""
      }
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.errors.general !== nextProps.errors.general){
      this.setState({
        error:{
          general: nextProps.errors.general,
          password: "",
          username: ""
        }
      })
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState( {
        [type]: e.target.value
      });
    };
  }

  handleClick(e){
    this.setState({
      sorry: "You'll have to make a new account, sorry!"
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let error = false;
    let passwordError = "";
    let usernameError = "";
    if(this.state.password.length < 6){
      error = true;
      passwordError = "Password must be at least 6 characters long!"
    }
    if(this.state.username.length === 0){
      usernameError = "Username can't be empty!"
    }
    if (error){
      this.setState({
        error: {
          username: usernameError,
          password: passwordError
        }
      });
    }
    else
      this.props.submitForm(this.state);
  }

  demoUser(e){
    e.preventDefault();
    this.props.demoForm({username: "Demo", password: "password"});
  }


  render() {
    if(this.props.loading){
      return (
        <div>
          <Loading />
        </div>
      )
    }
    // In order to make the button not exist on the page
    // or else enter will hit the button!
    let button = "";
    if(this.props.formType === "Login"){
      button =
      <button onClick={this.handleClick}>
        <div className="forgot-password">
          <div className="link-color">
            {this.props.forgotPassword}
          </div>
          {this.state.sorry}
        </div>
      </button>;
    }
    return (
    <div className="background">
      <Logo />
      <div className="form-container">
        <form className="session-form">
          <div className="centeringWrapper">
            <div className="title">{this.props.welcome}</div>
            <div className="subTitle">{this.props.welcome2}</div>
            <div className="block">
              <div className="error">{this.state.error.general}</div>
              <h5 className="input-title">Username</h5>
              <div className="error">{this.state.error.username}</div>
              <input className="input-default"
                type="text"
                onChange={this.handleInput('username')}
                value={this.state.username}>
              </input>
              <h5 className="input-title">Password</h5>
              <div className="error">{this.state.error.password}</div>
              <input className="input-default"
                type="password"
                onChange={this.handleInput('password')}
                value={this.state.password}>
              </input>
              {button}

              <button className="submit-button" onClick={this.handleSubmit}><div className="button-content">{this.props.formType}</div></button>
              <div className="flex">
                <span className="need-account">
                  {this.props.needAccount} &nbsp;
                  <button className="register">
                    <Link to="/signup">
                      <div className="button-content link-color">{this.props.register}</div>
                    </Link>
                    <Link to="/">
                      <div className="button-content link-color">{this.props.haveAccount}</div>
                    </Link>
                  </button>
                </span>
                <button onClick={this.demoUser} className="register button-content link-color demo">Demo</button>
              </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    );
  }
}

export default SignUpForm;
