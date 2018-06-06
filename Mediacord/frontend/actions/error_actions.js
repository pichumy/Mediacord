export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';

export const receiveErrors = (errors) => {
    return (
      { type: RECEIVE_ERRORS, errors }
    )
};

export const resetErrors = () => {
  return (
    { type: RESET_ERRORS }
  )
}
