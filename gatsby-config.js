module.exports = {
  siteMetadata: {
    title: 'CovHack2020',
    description: `CovHackSoc's Second Annual Hackathon`,
    map: {
      url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      id: 'mapbox/streets-v11',
      accessToken:
        'pk.eyJ1IjoiY292aGFjayIsImEiOiJjazN0YzdoZ3owMWF6M25xOHg5OGhweGZzIn0.D9GaXpt0un2dtWm-NlVt7A',
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      location: {
        position: [52.40526, -1.49989],
        name: 'Engineering & Computing Building, Coventry University',
        description: '3 Gulson Rd, Coventry CV1 2JH, United Kingdom',
      },
    },
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `how-to-find-us`,
        path: `${__dirname}/src/collections/how-to-find-us`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/collections/faq`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/collections/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
}
