import entitiesReducer from './entitiesReducer';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errorsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducer
});
