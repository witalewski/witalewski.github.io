import axios from 'axios';
import * as R from 'ramda';
import { parseMediumFeed } from '../utils/mediumFeedParser';

export const IMPURE_getMediumPosts = () =>
  axios.post(
    'https://qw6c0mxwz9.execute-api.eu-west-1.amazonaws.com/default/lightswitch',
    JSON.stringify({
      medium: true,
    }),
    {
      headers: {
        'X-Api-Key': 'S0a5WCywb68N075YgoTVK3TidPB11bus2vplyW9s',
        'Content-Type': 'application/json',
      },
    }
  );

  export const processMediumResults = R.compose(
    parseMediumFeed,
    R.prop('data')
  );