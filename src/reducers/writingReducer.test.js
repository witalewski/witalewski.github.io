import { writingReducer, processWritingResponse } from './writingReducer';
import writingResponse from '../mocks/writingResponse.json';

describe('writingReducer', () => {
  test('returns a state object', () => {
    const result = writingReducer(undefined, { type: 'nothing' });
    expect(result).toEqual([]);
  });

  test('stores a list of posts', () => {
    const action = { type: 'RECEIVE_WRITING', response: writingResponse };
    const result = writingReducer(undefined, action);
    expect(result).toEqual(processWritingResponse(writingResponse));
  });
});
