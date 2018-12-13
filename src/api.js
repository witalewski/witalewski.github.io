import axios from 'axios';

export const getCode = () =>
  axios.get('https://api.github.com/users/witalewski/repos');

export const getPhotos = () =>
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

export const getWriting = () =>
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
