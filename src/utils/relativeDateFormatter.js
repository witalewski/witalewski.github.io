import * as R from 'ramda';

export const getRelativeDate = dateString => {
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const YEAR = 365 * DAY;
  const now = new Date();
  const then = new Date(dateString);
  const difference = new Date().getTime() - new Date(dateString).getTime();

  return R.cond([
    [R.lt(R.__, MINUTE), R.always('just now')],
    [R.lt(R.__, 2 * MINUTE), R.always('1 minute ago')],
    [
      R.lt(R.__, HOUR),
      R.always(`${Math.floor(difference / MINUTE)} minutes ago`),
    ],
    [R.lt(R.__, 2 * HOUR), R.always('1 hour ago')],
    [R.lt(R.__, DAY), R.always(`${Math.floor(difference / HOUR)} hours ago`)],
    [
      R.lt(R.__, 2 * DAY),
      R.always(
        R.ifElse(
          () =>
            [1, -27, -28, -29, -30].indexOf(now.getDate() - then.getDate()) >
            -1,
          R.always('yesterday'),
          R.always('2 days ago')
        )
      )(),
    ],
    [R.lt(R.__, WEEK), R.always(`${Math.floor(difference / DAY)} days ago`)],
    [R.lt(R.__, 2 * WEEK), R.always('1 week ago')],
    [R.lt(R.__, YEAR), R.always(`${Math.floor(difference / WEEK)} weeks ago`)],
    [
      R.always(R.equals(now.getFullYear(), then.getFullYear() + 1)),
      R.always('last year'),
    ],
    [
      R.always(R.T()),
      R.always(`${now.getFullYear() - then.getFullYear()} years ago`),
    ],
  ])(difference);
};
