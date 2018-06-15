import * as APIUtil from '../utils/message_utils';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = (channel) => {
  // let channel_id = channel.id // not going to use these right now actually
  let messages = channel.messages
  return(
    { type: RECEIVE_MESSAGES, messages}
  )
}

export const receiveMessage = (message) => {
  return (
    { type: RECEIVE_MESSAGE, message}
  )
}

export const fetchMessages = (channelId) => dispatch => {
  return APIUtil.getMessages(channelId)
    .then(object => dispatch(receiveMessages(object.channel)))
}
