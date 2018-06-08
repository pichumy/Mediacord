import { START_LOADING, RECEIVE_NEW_USER, RECEIVE_NEW_SESSION, LOGOUT_USER } from '../../actions/session_actions';
import { RECEIVE_ERRORS } from '../../actions/error_actions';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case LOGOUT_USER:
      return Object.assign({}, state, {loading: false});
    case RECEIVE_NEW_USER:
      return Object.assign({}, state, {loading: false});
    case RECEIVE_NEW_SESSION:
      return Object.assign({}, state, {loading: false});
    case START_LOADING:
      return Object.assign({}, state, {loading: true});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {loading: false});
    default:
      return state;
  }
}

export default loadingReducer;
