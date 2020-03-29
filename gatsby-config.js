const queries = require("./src/utils/algolia");

require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: `jvar.nl`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: "@JaspervRijbro",
        me: {
            title: "Jasper van Rijbroek",
            slogan: "Professional PHP and NodeJS developer",
            social: {}
        }
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-reading-time`
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_KEY,
                head: true,
                anonymize: true,
                respectDNT: true,
            },
        },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries,
                chunkSize: 10000, // default: 1000
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],
                defaultLayouts: {
                    default: require.resolve("./src/templates/page.js"),
                }
            }
        },
        `gatsby-plugin-offline`
    ],
};
