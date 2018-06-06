import { RECEIVE_NEW_SESSION, LOGOUT_USER } from '../actions/session_actions';

const initialState = {
  id: null
};

const sessionsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_NEW_SESSION:
        return Object.assign({}, {id: action.user.id});
      case LOGOUT_USER:
        return initialState;
      default:
        return state;
  }
};

export default sessionsReducer;
