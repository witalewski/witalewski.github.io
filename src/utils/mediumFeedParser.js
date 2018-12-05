import xmlJS from 'xml-js';
export const parseMediumFeed = data => {
  const parser = new DOMParser();
  const {
    rss: {
      channel: { item },
    },
  } = JSON.parse(xmlJS.xml2json(data, { compact: true }));
  const feed = item.map(item => {
    const document = parser.parseFromString(
      item['content:encoded']._cdata,
      'text/html'
    );
    const paragraphs = document.getElementsByTagName('p');
    const contentStrings = [];
    for (let i = 0; i < paragraphs.length; i++) {
      contentStrings.push(paragraphs[i].innerText);
    }
    return {
      title: item.title._cdata,
      link: item.link._text,
      date: item.pubDate._text,
      categories: item.category.map(category => category._cdata),
      image: document.getElementsByTagName('img')[0].src,
      content: `${contentStrings.join(' ').substr(0, 180).match(/(.*)\W/)[1]}...`,
    };
  });
  return feed;
};
