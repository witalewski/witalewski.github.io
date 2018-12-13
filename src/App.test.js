import React from 'react';
import ReactDOM from 'react-dom';import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { codeReducer } from './reducers/codeReducer';
import { writingReducer } from './reducers/writingReducer';
import { photosReducer } from './reducers/photosReducer';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const reducers = {
    code: codeReducer,
    writing: writingReducer,
    photos: photosReducer,
  };
  const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
