import { RECEIVE_PRIVATE_SERVERS, RECEIVE_PRIVATE_SERVER } from '../../actions/server_actions';

const initialState = {}

const privateMessageServerReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_PRIVATE_SERVER:
      return Object.assign({}, state, {[action.server.id]: action.server});
    case RECEIVE_PRIVATE_SERVERS:
      let newObject = {}
      if(Array.isArray(action.channels)){
        action.channels.map(channel => {
          newObject[channel.id] = channel
      });
      }

      return newObject;
    default:
      return state;
  }
}

export default privateMessageServerReducer;
