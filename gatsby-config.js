/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv/config');
console.log('Using GH Token: ', process.env.GH_TOKEN);

module.exports = {
  plugins: [
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
