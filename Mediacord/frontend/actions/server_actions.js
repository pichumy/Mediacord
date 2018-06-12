import * as APIUtils from '../utils/server_utils';
import { RECEIVE_ERRORS, RESET_ERRORS, receiveErrors, resetErrors } from './error_actions'
import { postChannel } from '../utils/channel_utils';
import { closeModal } from './modal_actions';
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_USER_LIST = "RECEIVE_USER_LIST";
export const RECEIVE_JOINED_USER = "RECEIVE_JOINED_USER";


const receiveServer = (server) => {
  return (
    {type: RECEIVE_SERVER, server}
  )
}

const receiveServers = (servers) => {
  return (
    {type: RECEIVE_SERVERS, servers}
  )
}

const receiveUserList = (users) => {
  return (
    { type: RECEIVE_USER_LIST, users }
  )
}

// dont need to do this
// const receiveUser = (user) => ({
//   type: RECEIVE_JOINED_USER,
//   user
// })

export const fetchServers = () => dispatch => {
  return APIUtils.getServers()
    .then(servers => dispatch(receiveServers(servers)), error => dispatch(receiveErrors(error)));
}

export const createServer = (serverData) => dispatch => {
  return APIUtils.postServer(serverData)
    .then((data) => {
      postChannel({name: "General", server_id: data.server.id});
      APIUtils.joinServer(data.server.id);
      dispatch(receiveServer(data.server));
    }, error => dispatch(receiveErrors(error)))
}

export const fetchUserList = (serverId) => dispatch => {
  return APIUtils.getUserList(serverId)
    .then((users) => dispatch(receiveUserList(users)))
}

export const joinServer = (serverId) => dispatch => {
  return APIUtils.joinServer(serverId)
    .then(() => dispatch(fetchServers()), (error) => dispatch(receiveError('server', error)))
    .then(() => dispatch(closeModal()))
}
