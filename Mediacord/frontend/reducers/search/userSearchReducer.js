import { RECEIVE_QUERIED_USERS } from '../../actions/search_actions';

const initialState = [];

const userSearchReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_QUERIED_USERS:
      return action.users;
    default:
      return state
  }
}

export default userSearchReducer;
