import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default (preLoadedState = {}) => createStore(
  rootReducer, preLoadedState,
  applyMiddleware(thunk, logger)
);
