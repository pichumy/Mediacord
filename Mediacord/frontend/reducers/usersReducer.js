import { RECEIVE_NEW_SESSION } from '../actions/session_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_NEW_SESSION:
        return Object.assign({}, state, { [action.user.id]: action.user });
      default:
        return state;
  }
};

export default usersReducer;
