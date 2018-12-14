import { photosReducer, processPhotosResponse } from './photosReducer';
import mockPhotosResponse from '../mocks/photosResponse.json';
import { RECEIVE_PHOTOS } from '../actions';

describe('photosReducer', () => {
  test('returns a state object', () => {
    const result = photosReducer(undefined, { type: 'nothing' });
    expect(result).toEqual([]);
  });

  test('stores a list of photos', () => {
    const action = { type: RECEIVE_PHOTOS, response: mockPhotosResponse };
    const result = photosReducer(undefined, action);
    expect(result).toEqual(processPhotosResponse(mockPhotosResponse));
  });
});
