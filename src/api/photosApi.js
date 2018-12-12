import axios from 'axios';
import * as R from 'ramda';
export const IMPURE_getPhotos = () =>
  axios.post(
    'https://qw6c0mxwz9.execute-api.eu-west-1.amazonaws.com/default/lightswitch',
    JSON.stringify({
      instagram: true,
    }),
    {
      headers: {
        'X-Api-Key': 'S0a5WCywb68N075YgoTVK3TidPB11bus2vplyW9s',
        'Content-Type': 'application/json',
      },
    }
  );

export const processPhotosResults = R.compose(
  R.prop('data'),
  R.prop('data')
);