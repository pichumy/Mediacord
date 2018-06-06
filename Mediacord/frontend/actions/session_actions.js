import * as APIUtils from '../utils/session_utils';
export const RECEIVE_NEW_SESSION = 'RECEIVE_NEW_SESSION';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'


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


const receiveErrors = (errors) => {
    return (
      { type: RECEIVE_ERRORS, errors }
    )
};


export const createNewSession = userForm => dispatch => {
  return APIUtils.postSession(userForm)
    .then(user => dispatch(receiveNewSession(user)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const logoutSession = () => dispatch => {
  return APIUtils.deleteSession()
    .then(() => dispatch(logoutUser()), error => dispatch(receiveErrors(error.responseJSON)));
};

export const createUser = userForm => dispatch => {
  return APIUtils.postUser(userForm)
    .then(user => dispatch(receiveNewSession(user)), error => dispatch(receiveErrors(error.responseJSON)));
};
