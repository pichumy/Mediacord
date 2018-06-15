import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../../actions/message_actions';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_MESSAGES:
    // only messages for one channel should be loaded at any one time
      let object = {}
      action.messages.array.map(message => {
        object[message.id] = message
      })
      return object;
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message});
    default:
      return state;
  }
}

export default messagesReducer;
