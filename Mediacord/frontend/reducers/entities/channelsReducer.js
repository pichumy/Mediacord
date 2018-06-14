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
      return newObject;
    default:
      return state;
  }
}

export default ChannelReducer;
