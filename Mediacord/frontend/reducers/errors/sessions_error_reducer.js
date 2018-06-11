import { RECEIVE_NEW_SESSION, RESET_ERRORS } from '../../actions/session_actions';
import { RECEIVE_ERRORS } from '../../actions/error_actions';
const initialState = {};

const sessionsErrorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_NEW_SESSION:
      return {};
    case RESET_ERRORS:
      return {};
    default:
      return state;
  }
};

export default sessionsErrorReducer;
