import React from "react"
import {graphql, Link} from "gatsby";
import PageTemplate from "../templates/page";
import algoliasearch from 'algoliasearch';

const client = algoliasearch('IMR7H3NXXW', 'c559f11f4c0ecb1bf2540a712cda78d5');
const index = client.initIndex('Posts');

export default class IndexPage extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    updateSearch(query) {
        index.search(query).then( ({hits}) => {
            this.setState({
                searchResults: hits.map((item) => {
                    item.id = item.objectID;

                    return {
                        node: item
                    }
                })
            });
        })
    }

    getPosts() {
        // If there is no search query, we will show the normal posts.
        // Else a filter will be done.
        if(this.state && this.state.searchResults && this.state.searchResults.length) {
            return this.state.searchResults;
        }

        return this.props.data.allMarkdownRemark.edges
    }

    render() {
        return (
            <PageTemplate isHome={true}>

                <div className="search">
                    <input type="text" placeholder="Search" onKeyUp={(event) => this.updateSearch(event.target.value)} />
                </div>

                <ul id="post-list">
                    {this.getPosts().map(node => (
                        <li key={node.node.id}>
                            <Link to={node.node.fields.path}>
                                <aside className="dates">{node.node.fields.date}</aside>
                            </Link>
                            <Link to={node.node.fields.path}>
                                {node.node.frontmatter.title}
                                <h2>{node.node.frontmatter.description}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>

            </PageTemplate>
        );
    }
}

export const IndexPageQuery = graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [fields___date] }
      ) {
        edges {
          node {
            id,
            fields {
              path,
              date(formatString: "MMMM DD, YYYY")
            },
            frontmatter {
              title,
              description
            }
          }
        }
      }
    }
  `;
