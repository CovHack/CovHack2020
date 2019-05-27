module.exports = {
  siteMetadata: {
    title: 'CovHack2020',
    description: `CovHackSoc's Second Annual Hackathon`
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'
  ]
}
