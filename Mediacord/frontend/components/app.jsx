import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Home from './home';

const App = () => (
  <div className="app">
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/home" component={Home} />
  </div>
);

export default App;
