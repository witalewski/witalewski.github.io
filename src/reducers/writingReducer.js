import * as R from 'ramda';
import { parseMediumFeed } from '../utils/mediumFeedParser';

export const processWritingResponse = R.compose(
  parseMediumFeed,
  R.prop('data')
);

export const writingReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_WRITING':
      return processWritingResponse(action.response);
    default:
      return state;
  }
};
