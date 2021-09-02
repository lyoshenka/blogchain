module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Blogging via LBRY`,
    subtitle: `blogging via LBRY`,
    description: `A minimal blog starter built with Gatsbyjs and backed by LBRY`,
    author: `@grin_io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-lbry`,
      options: {
        channel: `@grin`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
        ],
      },
    },
  ],
}
