import { RECEIVE_USER_LIST } from '../../actions/server_actions';

const initialState = [];

const userListReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_USER_LIST:
    let newObject = {};
      action.users.map(user => {
        newObject[user.id] = user;
      })
      return Object.assign({}, newObject);
    default:
      return state;
  }
}

export default userListReducer;
