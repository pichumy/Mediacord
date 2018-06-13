import { RECEIVE_SERVER, RECEIVE_SERVERS } from '../../actions/server_actions';

const initialState = {};

const sessionsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_SERVER:
        return Object.assign({}, state, {[action.server.id]: action.server});
      case RECEIVE_SERVERS:
        let newObject = {}
        action.servers.map(server => {
          newObject[server.id] = server
        })
        return newObject;
      default:
        return state;
  }
};

export default sessionsReducer;
