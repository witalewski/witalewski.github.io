/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv/config');

module.exports = {
  siteMetadata: {
    title: 'Adam Witalewski',
    description:
      'Developing advanced front-end applications with JavaScript, React and Redux.',
    siteUrl: 'https://witalewski.tech',
    image:
      'https://witalewski.tech/static/avatar-b52c3c6ea42ea0ce50c76bb5c8cdee85.jpg',
    social: {
      twitter: '@awitalewski',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: '@awitalewski',
        limit: 4,
      },
    },
    {
      resolve: 'gatsby-source-github-pinned',
      options: {
        apiToken: `${process.env.GH_TOKEN}`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'nihilismislove',
      },
    },
  ],
};
