import * as APIUtils from '../utils/server_utils';
import { RECEIVE_ERRORS, RESET_ERRORS, receiveErrors, resetErrors } from './error_actions'
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";

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

export const fetchServers = () => dispatch => {
  return APIUtils.getServers()
    .then(servers => dispatch(receiveServers(servers)), error => dispatch(receiveErrors(error)));
}

export const createServer = (serverData) => dispatch => {
  return APIUtils.postServer(serverData)
    .then((server) => dispatch(receiveServer(server)), error => dispatch(receiveErrors(error)))
}
