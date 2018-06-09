import * as APIUtil from '../utils/message_utils';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
})

export const fetchMessages = (logId) => dispatch => {
  return APIUtil.getMessages(logId)
    .then(object => dispatch(receiveMessages(object.log.messages)))
}
