const postQuery = `query {
  posts: allContentfulPost {
    edges {
      node {
        objectID: id
        title
        createdOn(formatString: "MMM D, YYYY")
        body {
          childMarkdownRemark {
            html
          }
        }
        fields {
          path
        }
      }
    }
  }
}`;
const flatten = arr =>
    arr.map(({node: {...rest}}) => ({
        ...rest,
    }));
const settings = {attributesToSnippet: [`excerpt:20`]};
const queries = [
    {
        query: postQuery,
        transformer: ({data}) => flatten(data.posts.edges),
        indexName: `${process.env.ALGOLIA_INDEX_NAME}Posts`,
        settings,
    },
];

module.exports = queries;