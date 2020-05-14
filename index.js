import { registerRootComponent } from 'expo';

import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './src/reducers/reducer';

import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));

const AppWithRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWithRedux);
