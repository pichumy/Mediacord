import { RECEIVE_SERVER, RECEIVE_SERVERS } from '../../actions/server_actions';

const initialState = [];

const sessionsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_SERVER:
        return [...state, action.server]
      case RECEIVE_SERVERS:
        return action.servers;
      default:
        return state;
  }
};

export default sessionsReducer;
