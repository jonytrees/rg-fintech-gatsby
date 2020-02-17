module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `js`,
      path: `${__dirname}/src/js`,
      ignore: [`**/\.*`], // ignore files starting with a dot
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  externals: {
  jquery: 'jQuery',
}
}
