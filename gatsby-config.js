/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "@awitalewski",
        limit: 4
      }
    },
    {
      resolve: "gatsby-source-github-pinned",
      options: {
        apiToken: "9973b2c47a5d580ec4f641616c0ab7e176bcb956"
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato"]
        }
      }
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "nihilismislove"
      }
    }
  ]
};
