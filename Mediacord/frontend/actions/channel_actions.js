import * as APIUtil from '../utils/channel_utils';
import { closeModal } from './modal_actions';
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const START_LOADING = 'START_LOADING';
import { RECEIVE_ERRORS, RESET_ERRORS, receiveErrors, resetErrors } from './error_actions'


const receiveChannel = (channel) => {
  dispatch(closeModal());
  return(
    { type: RECEIVE_CHANNEL, channel: channel.channel }
  )
}

// const startLoading = () => ({
//   type: START_LOADING
// })

const receiveChannels = (server) => {
  // array of channels
  let channels = server.channels;
  return (
    {type: RECEIVE_CHANNELS, channels}
  )
}

export const createChannel = (channelForm) => dispatch =>  {
  // dispatch(startLoading())
  return APIUtil.postChannel(channelForm)
    .then((channel) => dispatch(receiveChannel(channel)), error => dispatch(receiveErrors("channel", error.responseJSON)))
};

export const fetchChannels = (serverId) => dispatch => {
  // dispatch(startLoading())
  return APIUtil.getChannels(serverId)
    .then((object) => dispatch(receiveChannels(object.server)))
}
