import React from 'react';
import * as R from 'ramda';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { codeReducer } from './reducers/codeReducer';
import { writingReducer } from './reducers/writingReducer';
import { photosReducer } from './reducers/photosReducer';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { FixedNav } from './components/Nav/FixedNav';
import { default as Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

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

const navItems = [
  { label: 'Writing', href: '#writing' },
  { label: 'Code', href: '#code' },
  { label: 'Photos', href: '#photos' },
];

export const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <Nav items={navItems} />
      <FixedNav items={navItems} />
      <Main />
      <Footer />
    </div>
  </Provider>
);
