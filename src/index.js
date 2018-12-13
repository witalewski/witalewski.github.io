import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { codeReducer } from './reducers/codeReducer';
import { writingReducer } from './reducers/writingReducer';
import { photosReducer } from './reducers/photosReducer';
import * as actions from './actions';

const reducers = {
  code: codeReducer,
  writing: writingReducer,
  photos: photosReducer,
};
const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const dispatchWithPromiseSupport = store => {
  const rawDispatch = store.dispatch;
  return action =>
    typeof action.then === 'function'
      ? action.then(rawDispatch)
      : rawDispatch(action);
};

[actions.fetchWriting(), actions.fetchCode(), actions.fetchPhotos()].forEach(dispatchWithPromiseSupport(store));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
