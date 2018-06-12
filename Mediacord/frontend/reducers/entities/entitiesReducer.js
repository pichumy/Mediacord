import usersReducer from './usersReducer';
import serversReducer from './serversReducer';
import channelsReducer from './channelsReducer';
import messages from './messagesReducer';
import { combineReducers } from 'redux';
import userListReducer from './userListsReducer';

export default combineReducers({
    users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer,
    userList: userListReducer,
    messages
});
