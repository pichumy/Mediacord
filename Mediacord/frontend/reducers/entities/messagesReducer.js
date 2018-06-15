import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../../actions/message_actions';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_MESSAGES:
    // only messages for one channel should be loaded at any one time
      return action.messages;
    case RECEIVE_MESSAGE:
      let newArray = [];
      state.array.forEach(message => newArray.push(message));
      newArray.push(action.message);
      return {array: newArray};
    default:
      return state;
  }
}

export default messagesReducer;
