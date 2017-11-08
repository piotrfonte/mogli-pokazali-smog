module.exports = {
  siteMetadata: {
    title: ``
  },
  plugins: [
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: false,
        delimiter: [","],
        checkColumn: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`
      }
    }
  ]
};
