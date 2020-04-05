const postQuery = `query {
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          date(formatString: "MMM D, YYYY"),
          path
        }
        frontmatter {
          title
          description
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
        indexName: `Posts`,
        settings,
    },
];

module.exports = queries;