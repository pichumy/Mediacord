import * as APIUtil from '../utils/channel_utils';
import { closeModal } from './modal_actions';
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";

const receiveChannel = (channel) => {
  dispatch(closeModal());
  return(
    { type: RECEIVE_CHANNEL, channel }
  )
}

const receiveChannels(channels) => ({
  type: RECEIVE_CHANNELS,
  channels
})

export const createChannel = (channelForm) => dispatch =>  {
  return APIUtil.postChannel(channelForm)
    .then((channel) => dispatch(receiveChannel(channel)))
};

export const fetchChannels = (serverId) => dispatch => {
  return APIUtil.getChannels(serverId)
    .then((channels) => dispatch(receiveChannels(channels)))
}
