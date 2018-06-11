export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';
export const RECEIVE_SESSION_ERROR = "RECEIVE_SESSION_ERROR";
export const RECEIVE_CHANNEL_ERROR = "RECEIVE_CHANNEL_ERROR";

export const receiveErrors = (type, errors) => {
  let return_type;
  switch(type){
    case 'session':
      return_type = RECEIVE_SESSION_ERROR;
      break;
    case 'channel':
      return_type = RECEIVE_CHANNEL_ERROR;
      break;
    default:
      console.log(`Error, unknown type: ${return_type}`);
      return {type: RESET_ERRORS};
  }
    return (
      { type: return_type, errors }
    )
};

export const resetErrors = () => {
  return (
    { type: RESET_ERRORS }
  )
}
