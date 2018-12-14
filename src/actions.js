import * as R from 'ramda';
import * as api from './api';

export const RECEIVE_CODE = 'RECEIVE_CODE';
export const RECEIVE_WRITING = 'RECEIVE_WRITING';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

const createFetchAction = (fetchFunction, receiveAction) => () => dispatch =>
  fetchFunction().then(
    R.compose(
      dispatch,
      receiveAction
    )
  );

const receiveCode = response => ({
  type: RECEIVE_CODE,
  response,
});
export const fetchCode = createFetchAction(api.getCode, receiveCode);

const receiveWriting = response => ({
  type: RECEIVE_WRITING,
  response,
});
export const fetchWriting = createFetchAction(api.getWriting, receiveWriting);

const receivePhotos = response => ({
  type: RECEIVE_PHOTOS,
  response,
});
export const fetchPhotos = createFetchAction(api.getPhotos, receivePhotos);
