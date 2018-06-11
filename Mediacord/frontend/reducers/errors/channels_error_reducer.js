import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_CHANNEL_ERROR, RESET_ERRORS } from '../../actions/error_actions';

const initialState = {};

const channelsErrorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CHANNEL_ERROR:
      return action.errors;
    case RECEIVE_CHANNEL:
      return {};
    case RESET_ERRORS:
      return {};
    default:
      return state;
  }
};

export default channelsErrorReducer;
