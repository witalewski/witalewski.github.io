const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const YEAR = 365 * DAY;

export function getRelativeDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  let result;
  if (difference < MINUTE) {
    result = 'just now';
  } else if (difference < 2 * MINUTE) {
    result = '1 minute ago';
  } else if (difference < HOUR) {
    result = `${Math.floor(difference / MINUTE)} minutes ago`;
  } else if (difference < 2 * HOUR) {
    result = '1 hour ago';
  } else if (difference < DAY) {
    result = `${Math.floor(difference / HOUR)} hours ago`;
  } else if (difference < 2 * DAY) {
    if ([1, -27, -28, -29, -30].indexOf(now.getDate() - date.getDate())) {
      result = 'yesterday';
    } else {
      result = ' 2 days ago';
    }
  } else if (difference < WEEK) {
    result = `${Math.floor(difference / DAY)} days ago`;
  } else if (difference < 2 * WEEK) {
    result = '1 week ago';
  } else if (difference < YEAR) {
    result = `${Math.floor(difference / WEEK)} weeks ago`;
  } else if (now.getFullYear() - date.getFullYear() === 1) {
    result = 'last year';
  } else {
    result = `${now.getFullYear() - date.getFullYear()} years ago`;
  }
  return result;
}
