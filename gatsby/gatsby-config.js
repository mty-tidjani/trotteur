module.exports = {
  siteMetadata: {
    title: 'Coq Trotteur Test',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('node-sass'),
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
