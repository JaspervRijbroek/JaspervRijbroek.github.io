import React from "react"
import {graphql} from "gatsby";
import PageTemplate from "../templates/page";
import algoliasearch from 'algoliasearch';
import PostRow from "../components/post/row";
import SearchBar from "../components/search/bar";
import PostList from "../components/post/list";

const client = algoliasearch('IMR7H3NXXW', 'c559f11f4c0ecb1bf2540a712cda78d5');
const index = client.initIndex('DEV_Posts');

export default class IndexPage extends React.Component {
    constructor() {
        super();

        this.state = {
            currentPage: 0,
            postLimit: 5
        };
    }

    updateSearch(query) {
        if (!query) {
            return this.setState({
                searchResults: false
            });
        }

        index
            .search(query)
            .then(({hits}) => {
                this.setState({
                    currentPage: 0,
                    searchResults: hits
                        .sort((a, b) => {
                            let aTime = (new Date(a.fields.date)).getTime(),
                                bTime = (new Date(b.fields.date)).getTime();

                            if (aTime === bTime) {
                                return 0;
                            }

                            return aTime > bTime ? -1 : 1;
                        })
                        .map((item) => {
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
        if (this.state && this.state.searchResults) {
            return this.state.searchResults;
        }

        return this.props.data.allContentfulPost.edges
    }

    render() {
        let posts = this.getPosts(),
            hasPagination = posts.length > this.state.postLimit,
            currentPosts = posts.slice(this.state.postLimit * this.state.currentPage, this.state.postLimit * this.state.currentPage + this.state.postLimit);

        return (
            <PageTemplate isHome={true}>
                <SearchBar onKeyUp={(event) => this.updateSearch(event.target.value)} />

                {posts && posts.length > 0 && (
                    <PostList posts={currentPosts} />
                )}

                {(!posts || !posts.length) && (
                    <p>No posts found!</p>
                )}

                {hasPagination && (
                    <nav id="post-nav">
                        {this.state.currentPage > 0 && (
                            <span className="prev">
                                <button type='button' title='Previous page' onClick={() => {
                                    this.setState({currentPage: this.state.currentPage - 1});
                                    return false;
                                }} style={{cursor: 'hand'}}>
                                    <span className="arrow">←</span> Newer Posts
                                </button>
                            </span>
                        )}
                        {currentPosts.length >= this.state.postLimit && (
                            <span className="next">
                                <button type='button' title='Previous page' onClick={() => {
                                    this.setState({currentPage: this.state.currentPage + 1});
                                    return false;
                                }} style={{cursor: 'hand'}}>
                                    Older Posts <span className="arrow">→</span>
                                </button>
                            </span>
                        )}
                    </nav>
                )}

            </PageTemplate>
        );
    }
}

export const IndexPageQuery = graphql`
    query {
      allContentfulPost(sort: {fields: createdOn, order: DESC}) {
        edges {
          node {
            id
            title
            slug
            fields {
                path
            }
            standfirst {
              childMarkdownRemark {
                html
              }
            }
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `;
