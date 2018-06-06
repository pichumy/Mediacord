import usersReducer from './usersReducer';
import serversReducer from './serversReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    users: usersReducer,
    servers: serversReducer
});
