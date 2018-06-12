import { combineReducers } from 'redux';
import serverSearchReducer from './serverSearchReducer';

export default combineReducers({
  servers: serverSearchReducer
});
