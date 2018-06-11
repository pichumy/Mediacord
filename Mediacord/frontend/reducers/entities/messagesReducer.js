import { RECEIVE_MESSAGES } from '../../actions/message_actions';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_MESSAGES:
    // only messages for one channel should be loaded at any one time
      return action.messages;
    default:
      return state;
  }
}

export default messagesReducer;
