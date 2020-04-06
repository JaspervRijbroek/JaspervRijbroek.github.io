import React from "react"
import DefaultTemplate from "./default";
import {graphql} from "gatsby";
import {Profile} from "../components/profile";
import PostRow from "../components/post-row";

const TopicTemplate = ({data, pageContext}) => {
    return (
        <DefaultTemplate>
            <div className="topic post">
                <header id="header">
                    <h1>{pageContext.topic}</h1>
                </header>
            </div>

            {data && data.allMarkdownRemark && data.allMarkdownRemark.nodes && data.allMarkdownRemark.nodes.length && (
                <ul id="post-list">
                    {data.allMarkdownRemark.nodes.map((node) => (
                        <PostRow key={node.id} post={node} />
                    ))}
                </ul>
            )}
            <footer id="post-meta" className="clearfix">
                <Profile isFooter={true}/>
            </footer>
        </DefaultTemplate>
    )
};

export const pageQuery = graphql`
  query($topic: String!) {
    allMarkdownRemark(filter: {frontmatter: {topics: {eq: $topic}}}) {
        nodes {
          id
          fields {
            date(formatString: "MMMM DD, YYYY")
            path
          }
          frontmatter {
            title
            description
            topics
          }
        }
      }
  }
`;

export default TopicTemplate;