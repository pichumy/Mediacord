import sessionsErrorReducer from './sessions_error_reducer';
import { combineReducers } from 'redux';

export default combineReducers( {
  sessionErrors: sessionsErrorReducer
});
