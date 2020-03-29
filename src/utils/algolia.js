const postQuery = `query {
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          date(formatString: "MMM D, YYYY")
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
    arr.map(({node: {frontmatter, ...rest}}) => ({
        ...frontmatter,
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