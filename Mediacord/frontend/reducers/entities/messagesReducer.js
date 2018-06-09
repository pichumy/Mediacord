import { RECEIVE_MESSAGES } from '../../actions/message_actions';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}

export default messagesReducer;
