require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Shape Portfolio`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shape Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#5439D2`,
        theme_color: `#5EDEB3`,
        display: `minimal-ui`,
        icon: `src/images/takeshape-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-takeshape`,
      options: {
        apiKey: process.env.TAKESHAPE_TOKEN,
        projectId: process.env.TAKESHAPE_PROJECT,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
