import { RECEIVE_USER_LIST, RECEIVE_JOINED_USER } from '../../actions/server_actions';

const initialState = {};

const userListReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_USER_LIST:
    let newObject = {};
      action.users.map(user => {
        newObject[user.id] = user;
      })
      return Object.assign({}, newObject);
    case RECEIVE_JOINED_USER:
      console.log(action);
      return Object.assign({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
}

export default userListReducer;
