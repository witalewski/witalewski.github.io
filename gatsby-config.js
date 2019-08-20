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
      'Adam Witalewski | Developing advanced front-end applications with JavaScript, React and Redux.',
    siteUrl: 'https://witalewski.tech',
    image:
      'https://witalewski.tech/static/avatar-b52c3c6ea42ea0ce50c76bb5c8cdee85.jpg',
    social: {
      twitter: '@awitalewski',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: '@awitalewski',
        limit: 4,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans', 'Roboto'],
        },
      },
    },
  ],
};
