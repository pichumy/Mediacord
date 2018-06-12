import { RECEIVE_QUERIED_SERVERS, RECEIVE_QUERIED_USERS } from '../../actions/search_actions';

const initialState = [];

const serverSearchReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_QUERIED_SERVERS:
      return action.servers;
    default:
      return state
  }
}

export default serverSearchReducer;
