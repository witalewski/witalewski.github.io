import * as R from 'ramda';
import { RECEIVE_CODE } from '../actions';

export const displayedRepos = [
  'grid-magic',
  'nightcall',
  'hooks-demo',
  'react-wombat',
  'mobx-quickstart',
  'witalewski.github.io',
];

const filterRepos = R.filter(
  R.compose(
    R.flip(R.any)(displayedRepos),
    R.equals,
    R.prop('name')
  )
);

export const processReposResponse = R.compose(
  filterRepos,
  R.prop('data')
);

export const defaultState = {
  repos: [],
  reposCount: displayedRepos.length,
};

export const codeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CODE:
      return {
        ...state,
        repos: processReposResponse(action.response),
      };
    default:
      return state;
  }
};
