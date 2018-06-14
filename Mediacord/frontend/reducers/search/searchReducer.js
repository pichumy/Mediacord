import { combineReducers } from 'redux';
import serverSearchReducer from './serverSearchReducer';
import users from './userSearchReducer';

export default combineReducers({
  servers: serverSearchReducer,
  users,
});
