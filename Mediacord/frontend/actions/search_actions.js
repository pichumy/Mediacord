import * as APIUtil from '../utils/search_utils';
export const RECEIVE_QUERIED_SERVERS = "RECEIVE_QUERIED_SERVERS";
export const RECEIVE_QUERIED_USERS = "RECEIVE_QUERIED_USERS";

const receiveServers = (servers) => {
  return (
    { type: RECEIVE_QUERIED_SERVERS, servers }
  )
}

const receiveUsers = (users) => {
  return (
    { type: RECEIVE_QUERIED_USERS, users}
  )
}


export const fetchServerByName = (name) => dispatch => {
  return APIUtil.getServers(name)
    .then(servers => dispatch(receiveServers(servers)))
}

export const fetchUserByName = (name) => dispatch => {
  return APIUtil.getUsers(name)
    .then(users => dispatch(receiveUsers(users)))
}
