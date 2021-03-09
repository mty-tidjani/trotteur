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
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'xxxxxxx',
            },
        },
        'gatsby-plugin-react-helmet',
    ],
};
