import * as api from './api';

const receiveCode = response => ({
  type: 'RECEIVE_CODE',
  response,
});
export const fetchCode = () => api.getCode().then(receiveCode);

const receiveWriting = response => ({
  type: 'RECEIVE_WRITING',
  response,
});
export const fetchWriting = () => api.getWriting().then(receiveWriting);

const receivePhotos = response => ({
  type: 'RECEIVE_PHOTOS',
  response,
});
export const fetchPhotos = () => api.getPhotos().then(receivePhotos);
