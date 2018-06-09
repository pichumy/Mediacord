import * as APIUtil from '../utils/log_utils';
export const RECEIVE_LOG = "RECEIVE_LOG";

const receiveLog = (channel) => ({
  type: RECEIVE_LOG,
  log: channel.log
});

export const fetchLog = (channelId) => dispatch => {
  return APIUtil.getLog(channelId)
    .then(object => dispatch(receiveLog(object.channel)))
}
