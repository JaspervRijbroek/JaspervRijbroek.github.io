const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions;

    if (node.internal.type === `MarkdownRemark`) {
        let parts = path.parse(node.fileAbsolutePath),
            filename = parts.name;

        // get the date and title from the file name
        const [, date, title] = filename.match(
            /^([\d]{4}-[\d]{2}-[\d]{2})-(.+)$/
        );
        const [, year] = date.match(/^([\d]{4})/);

        createNodeField({node, name: `path`, value: `/${year}/${title}`});
        createNodeField({node, name: `date`, value: date});
        createNodeField({node, name: `year`, value: year});
    }
};

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions,
        postTemplate = path.resolve(`src/templates/post.js`),
        topicTemplate = path.resolve('src/templates/topic.js'),
        postResult = await graphql(`{
              allMarkdownRemark(
                sort: { order: DESC, fields: [fields___date] }
              ) {
                edges {
                  node {
                    id
                    fields {
                      path
                    }
                    frontmatter {
                        topics
                    }
                  }
                }
              }
            }
          `),
        topicResults = await graphql(`{
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            topics
                        }
                    }
                }
            }
        }`);
    // Handle errors
    if (postResult.errors || topicResults.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create pages for the blog pages.
    postResult.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.path,
            component: postTemplate,
            context: {
                id: node.id,
                topics: node.frontmatter.topics
            }
        })
    });

    // Create the topic pages
    topicResults.data.allMarkdownRemark.edges.reduce(function(carry, {node}) {
        return carry.concat(node.frontmatter.topics);
    }, []).filter((item, index, self) => self.indexOf(item) === index).forEach(topic => {
        createPage({
            path: `/topic/${topic}`,
            component: topicTemplate,
            context: {
                topic
            }
        })
    })
};