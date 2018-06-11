import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from '../../actions/channel_actions';

let initialState = [];

const ChannelReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, {[action.channel.id]: action.channel});
    case RECEIVE_CHANNELS:
      let newObject = {};
      action.channels.map(channel => {
        newObject[channel.id] = channel;
      })
      // return Object.assign({}, state, newObject); // I want to get rid of channels
      return Object.assign({}, newObject);
    default:
      return state;
  }
}

export default ChannelReducer;
