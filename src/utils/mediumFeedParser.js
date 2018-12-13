import * as R from 'ramda';

const parseXML = data => new DOMParser().parseFromString(data, 'text/html');

const htmlCollectionToArray = htmlCollection => {
  const array = [];
  for (let i = 0; i < htmlCollection.length; i++) {
    array.push(htmlCollection.item(i));
  }
  return array;
};

const getTags = tagName => element =>
  htmlCollectionToArray(element.getElementsByTagName(tagName));
const getTag = tagName =>
  R.compose(
    R.head,
    getTags(tagName)
  );

const itemToItemWithContentEncoded = item => ({
  item,
  contentEncoded: getTag('content:encoded')(item),
});

const removeCdata = str => str && str.match(/<!\[CDATA\[(.*)\]\]>/)[1];

const getInnerText = R.prop('innerText');

const trim = s => s.substr(0, 160).match(/(.*)\W/)[1].concat('...');

const getSummary = R.compose(
  trim,
  R.join(' '),
  R.map(getInnerText),
  getTags('p')
);

const itemWithContentEncodedToResult = ({ item, contentEncoded }) => ({
  title: removeCdata(getTag('title')(item).innerText),
  link: getTag('link')(item).innerText,
  date: getTag('pubDate')(item).innerText,
  image: getTag('img')(contentEncoded).src,
  content: getSummary(contentEncoded),
});

export const parseMediumFeed = R.compose(
  R.map(
    R.compose(
      itemWithContentEncodedToResult,
      itemToItemWithContentEncoded
    )
  ),
  getTags('item'),
  parseXML
);
