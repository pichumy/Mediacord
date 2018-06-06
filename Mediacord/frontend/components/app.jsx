import React from 'react';
import { Route , Switch, Redirect} from 'react-router-dom';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import HomeContainer from './home/home_container';

const App = () => (
  <div className="app">
    <Switch>
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
