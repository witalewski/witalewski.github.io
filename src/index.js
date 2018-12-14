import React from 'react';
import ReactDOM from 'react-dom';
import * as R from 'ramda';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { codeReducer } from './reducers/codeReducer';
import { writingReducer } from './reducers/writingReducer';
import { photosReducer } from './reducers/photosReducer';
import * as actions from './actions';
import { App } from './App';

const reducers = {
  code: codeReducer,
  writing: writingReducer,
  photos: photosReducer,
};
const store = createStore(
  combineReducers(reducers),
  R.compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : R.identity
  )
);

[actions.fetchWriting(), actions.fetchCode(), actions.fetchPhotos()].forEach(
  store.dispatch
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
