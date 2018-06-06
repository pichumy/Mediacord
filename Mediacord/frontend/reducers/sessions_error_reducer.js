import { RECEIVE_ERRORS, RECEIVE_NEW_SESSION } from '../actions/session_actions';

const initialState = [];

const sessionsErrorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_NEW_SESSION:
      return [];
    default:
      return state;
  }
};

export default sessionsErrorReducer;
