import * as R from 'ramda';
import { RECEIVE_PHOTOS } from '../actions';

export const processPhotosResponse = R.compose(
    R.prop('data'),
    R.prop('data')
  );

export const photosReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return processPhotosResponse(action.response);
    default:
      return state;
  }
};
