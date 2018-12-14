import { codeReducer, processReposResponse, defaultState } from './codeReducer';
import mockCodeResponse from '../mocks/codeResponse.json';
import { RECEIVE_CODE } from '../actions';

describe('codeReducer', () => {
  test('returns a state object', () => {
    const result = codeReducer(undefined, { type: 'nothing' });
    expect(result).toEqual(defaultState);
  });

  test('stores a list of repos', () => {
    const action = { type: RECEIVE_CODE, response: mockCodeResponse };
    const result = codeReducer(undefined, action);
    expect(result.repos).toEqual(processReposResponse(mockCodeResponse));
  });
});
