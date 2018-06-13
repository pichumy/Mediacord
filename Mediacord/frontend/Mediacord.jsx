import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchServers } from './actions/server_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        id: window.currentUser.id,
        username: window.currentUser.username,
        avatar_url: window.currentUser.avatar_url
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.dispatch = store.dispatch;
  window.fetchServers = fetchServers;
  ReactDOM.render(<Root store={store}/>, root);
})
