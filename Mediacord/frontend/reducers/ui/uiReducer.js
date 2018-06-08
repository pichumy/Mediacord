import { combineReducers } from 'redux';

import modal from './modalReducer';
import loading from './loadingReducer';

export default combineReducers({
  modal: modal,
  loading: loading 
});
