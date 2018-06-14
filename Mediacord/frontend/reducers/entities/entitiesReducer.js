import users from './usersReducer';
import servers from './serversReducer';
import channels from './channelsReducer';
import messages from './messagesReducer';
import { combineReducers } from 'redux';
import userList from './userListsReducer';
import private_channels from './privateMessageServerReducer';

export default combineReducers({
    users,
    servers,
    channels,
    userList,
    messages,
    private_channels
});
