/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
        apiToken: '06438a65fdbb243ce49c3ed31d17eda943215d2f',
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
