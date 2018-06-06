import React from 'react';
import { Route , Switch} from 'react-router-dom';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Home from './home';

const App = () => (
  <div className="app">
    <Switch>
      <ProtectedRoute exact path="/home" component={Home} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;
