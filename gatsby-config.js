const queries = require("./src/utils/algolia");

require("dotenv").config();

module.exports = {
    siteMetadata: {
        siteUrl: 'https://jvar.nl',
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
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-reading-time`,
                    `gatsby-remark-images-contentful`
                ]
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID.replace(/"/g, ''),
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN.replace(/"/g, '')
            },
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Jvar",
                short_name: "Jvar",
                start_url: "/",
                background_color: "#FFF",
                theme_color: "#FFF",
                display: "standalone",
                icon: "src/assets/images/favicon.jpg", // This path is relative to the root of the site.
                crossOrigin: `use-credentials`,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require("tailwindcss")(),
                ],
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`
    ],
};
