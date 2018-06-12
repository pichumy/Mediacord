import entitiesReducer from './entities/entitiesReducer';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errors/errorsReducer';
import ui from './ui/uiReducer';
import search from './search/searchReducer';
import { combineReducers } from 'redux';


export default combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducer,
  ui: ui,
  search 
});
