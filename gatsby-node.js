const path = require('path');
const {createRemoteFileNode} = require('gatsby-source-filesystem');

exports.onCreateNode = async ({node, actions, store, cache}) => {
    const {createNodeField, createNode} = actions;

    if (node.internal.type === `ContentfulPost`) {
        const [, year] = node.createdOn.match(/^([\d]{4})/);

        if(node.image) {
            let image = await createRemoteFileNode({
                url: `https://source.unsplash.com/${node.image}/2160x450`,
                createNodeId: () => node.image,
                parentNodeId: node.id,
                createNode,
                store,
                cache,
                ext: '.jpeg'
            });

            node.image___NODE = image.id;
        }

        createNodeField({node, name: `path`, value: `/${year}/${node.slug}`});
        createNodeField({node, name: `date`, value: node.createdOn});
        createNodeField({node, name: `year`, value: year});
    }
};

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions,
        postTemplate = path.resolve(`src/templates/post.js`),
        topicTemplate = path.resolve('src/templates/topic.js'),
        pageTemplate = path.resolve('src/templates/page.js'),
        postResult = await graphql(`{
              allContentfulPost {
                edges {
                  node {
                    id
                    createdOn
                    fields {
                      path
                    }
                    topics {
                        id
                    }
                  }
                }
              }
            }
          `),
        topicResults = await graphql(`{
            allContentfulTopic {
                edges {
                    node {
                        id
                        title
                        slug
                    }
                }
            }
        }`),
        pagesResults = await graphql(`{
            allContentfulPage {
                edges {
                    node {
                        title
                        slug,
                        body {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                }
            }
        }`);

    if (postResult.errors || topicResults.errors || pagesResults.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create pages for the blog pages.
    postResult
        .data
        .allContentfulPost
        .edges
        .forEach(({node}) => {
            createPage({
                path: node.fields.path,
                component: postTemplate,
                context: {
                    id: node.id,
                    topics: node.topics.map(topic => topic.id) || []
                }
            })
        });

    // Create the topic pages
    topicResults
        .data
        .allContentfulTopic
        .edges
        .forEach(topic => {
            createPage({
                path: `/topic/${topic.node.slug}`,
                component: topicTemplate,
                context: {
                    topicID: topic.node.id
                }
            })
        })

    // Create the custom pages
    pagesResults
        .data
        .allContentfulPage
        .edges
        .forEach(page => {
            createPage({
                path: `/${page.node.slug}`,
                component: pageTemplate,
                context: {
                    page
                }
            })
        })
};