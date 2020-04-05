import React from "react"
import DefaultTemplate from "./default";
import {graphql, Link} from "gatsby";
import {Profile} from "../components/profile";

const TopicTemplate = ({data, pageContext}) => {
    return (
        <DefaultTemplate>
            <div className="topic post">
                <header id="header">
                    <h1>Topic: {pageContext.topic}</h1>
                </header>
            </div>

            {data && data.allMarkdownRemark && data.allMarkdownRemark.nodes && data.allMarkdownRemark.nodes.length && (
                <ul id="post-list">
                    {data.allMarkdownRemark.nodes.map((node) => (
                        <li key={node.id}>
                            <Link to={node.fields.path}>
                                <aside className="dates">{node.fields.date}</aside>
                            </Link>
                            <Link to={node.fields.path}>
                                {node.frontmatter.title}
                                <h2>{node.frontmatter.description}</h2>
                            </Link>
                        </li>
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