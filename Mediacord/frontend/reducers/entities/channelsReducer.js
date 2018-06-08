import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from '../../actions/channel_actions';

initialState = {}

const ChannelReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, [action.channel.id]: action.channel);
    case RECEIVE_CHANNELS:
      return Object.keys(action.channels).map(idx => action.channels[idx])

    default:
      return state;
  }
}
