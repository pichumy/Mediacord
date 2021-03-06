import sessionsErrorReducer from './sessions_error_reducer';
import channelsErrorReducer from './channels_error_reducer';
import servers from './servers_error_reducer';
import { combineReducers } from 'redux';


export default combineReducers( {
  sessionErrors: sessionsErrorReducer,
  channelErrors: channelsErrorReducer,
  servers 
});
