import axios from 'axios';
import * as R from 'ramda';
import { displayedRepos } from '../setup';

export const IMPURE_getRepos = () =>
  axios.get('https://api.github.com/users/witalewski/repos');

const filterRepos = R.filter(
  R.compose(
    R.flip(R.any)(displayedRepos),
    R.equals,
    R.prop('name')
  )
);

export const processReposResult = R.compose(
  filterRepos,
  R.prop('data')
);

export const IMPURE_displayedReposCount = () => displayedRepos.length;