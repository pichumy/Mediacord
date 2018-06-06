import * as APIUtils from '../utils/session_utils';
export const RECEIVE_NEW_SESSION = 'RECEIVE_NEW_SESSION';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const START_LOADING = 'START_LOADING';
import { RECEIVE_ERRORS, RESET_ERRORS, receiveErrors, resetErrors } from './error_actions'

const startLoading = () => ({
  type: START_LOADING
})

const receiveNewSession = user => (
  {
    type: RECEIVE_NEW_SESSION,
    user
  }
);

const logoutUser = () => (
  {
    type: LOGOUT_USER
  }
);

const receiveNewUser = (user) => (
  {
    type: RECEIVE_NEW_USER,
    user
  }
);



export const createNewSession = userForm => dispatch => {
  dispatch(startLoading());
  return APIUtils.postSession(userForm)
    .then(user => dispatch(receiveNewSession(user)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const logoutSession = () => dispatch => {
  dispatch(startLoading());
  return APIUtils.deleteSession()
    .then(() => dispatch(logoutUser()), error => dispatch(receiveErrors(error.responseJSON)));
};

export const createUser = userForm => dispatch => {
  dispatch(startLoading());
  return APIUtils.postUser(userForm)
    .then(user => dispatch(receiveNewSession(user)), error => dispatch(receiveErrors(error.responseJSON)));
};
