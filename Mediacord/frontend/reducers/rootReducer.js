import entitiesReducer from './entitiesReducer';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errorsReducer';
import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducer,
  loading: loadingReducer
});
