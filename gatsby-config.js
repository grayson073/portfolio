require('dotenv').config();
/* eslint-disable-next-line */
const SPACE_ID = process.env.SPACE_ID;
/* eslint-disable-next-line */
const DELIVERY_API_KEY = process.env.DELIVERY_API_KEY;
// const PREVIEW_API_KEY = process.env.PREVIEW_API_KEY;

/* eslint-disable-next-line */
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: SPACE_ID,
        accessToken: DELIVERY_API_KEY,
      },
    },
    // For PREVIEW API (includes contentful drafts)
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: SPACE_ID,
    //     accessToken: PREVIEW_API_KEY,
    //     host: `preview.contentful.com`,
    //   },
    // },
  ],
};
