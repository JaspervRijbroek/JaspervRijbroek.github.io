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
        const [,date, title] = filename.match(
            /^([\d]{4}-[\d]{2}-[\d]{2})-(.+)$/
        );
        const [, year] = date.match(/^([\d]{4})/);

        createNodeField({node, name: `path`, value: `/${year}/${title}`});
        createNodeField({node, name: `date`, value: date});
        createNodeField({node, name: `year`, value: year});
    }
};

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;
    const blogPostTemplate = path.resolve(`src/templates/blog.js`);
    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [fields___date] }
      ) {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `);
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.path,
            component: blogPostTemplate,
            context: {}, // additional data can be passed via context
        })
    })
};