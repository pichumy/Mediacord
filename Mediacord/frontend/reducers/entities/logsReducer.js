import { RECEIVE_LOG } from '../../actions/log_actions';

const initialState = {};

const logsReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_LOG:
      return Object.assign({}, state, {[action.log.channel_id]: action.log});
    default:
      return state;
  }
}

export default logsReducer;
