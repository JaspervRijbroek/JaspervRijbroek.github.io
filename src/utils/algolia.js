const postQuery = `query {
  allContentfulPost {
    edges {
      node {
        objectID: id
        title
        createdOn(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 80, maxHeight: 80) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }              
          }
        }
        teaser {
          childMarkdownRemark {
            html
          }
        }
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
const flatten = arr => {
    return arr.map((edge) => edge.node);
}
const settings = {attributesToSnippet: [`excerpt:20`]};
const queries = [
    {
        query: postQuery,
        transformer: ({data}) => flatten(data.allContentfulPost.edges),
        indexName: `${process.env.ALGOLIA_INDEX_NAME || ''}Posts`,
        settings,
    },
];

module.exports = queries;