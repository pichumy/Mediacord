import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Logo from '../logo';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      sorry: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.demoUser = this.demoUser.bind(this);
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
    this.props.submitForm(this.state);
  }

  demoUser(e){
    e.preventDefault();
    this.props.demoForm({username: "Demo", password: "password"});
  }

  render() {
    return (
    <div className="background">
      <Logo />
      <div className="form-container">
        <form className="session-form">
          <div className="centeringWrapper">
            <div className="title">{this.props.welcome}</div>
            <div className="subTitle">{this.props.welcome2}</div>
            <div className="block">
              <h5 className="input-title">Username</h5>
              <input className="input-default" type="text" onChange={this.handleInput('username')} value={this.state.username}></input>
              <h5 className="input-title">Password</h5>
              <input className="input-default" type="password" onChange={this.handleInput('password')} value={this.state.password}></input>
              <button onClick={this.handleClick}>
                <div className="forgot-password">
                  <div className="link-color">
                    {this.props.forgotPassword}
                  </div>
                  {this.state.sorry}
                </div>
              </button>

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
