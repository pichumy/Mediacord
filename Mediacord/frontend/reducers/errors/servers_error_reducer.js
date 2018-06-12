import { RECEIVE_SERVERS } from '../../actions/server_actions';
import { RECEIVE_SERVER_ERROR, RESET_ERRORS } from '../../actions/error_actions';
import { CLOSE_MODAL } from '../../actions/modal_actions';

const initialState = [];

const channelsErrorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_SERVER_ERROR:
      return action.errors;
    case RECEIVE_SERVERS:
      return [];
    case RESET_ERRORS:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default channelsErrorReducer;
