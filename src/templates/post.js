import React from "react"
import DefaultTemplate from "./default";
import {graphql, Link} from "gatsby";
import {Profile} from "../components/profile";

const BlogTemplate = ({data}) => {
    console.log(data);

    return (
        <DefaultTemplate>
            <article className="post">
                <header>
                    <h1>{data.markdownRemark.frontmatter.title}</h1>
                    <h2 className="headline">{data.markdownRemark.fields.date}</h2>
                </header>
                <section id="post-body" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
            </article>

            <footer id="post-meta" className="clearfix">
                <Profile isFooter={true}/>
            </footer>

            {data && data.allMarkdownRemark && data.allMarkdownRemark.nodes && data.allMarkdownRemark.nodes.length && (
                <ul id="post-list" className="archive readmore">
                    <h3>More like this</h3>

                    {data.allMarkdownRemark.nodes.map((node) => (
                        <li key={node.id}>
                            <Link to={node.fields.path}>
                                {node.frontmatter.title}
                                <aside className="dates">{node.fields.date}</aside>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

        </DefaultTemplate>
    )
};

export const pageQuery = graphql`
  query($path: String!, $topics: [String]!, $id: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
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
    allMarkdownRemark(filter: {frontmatter: {topics: {in: $topics}}, id: {ne: $id}}, sort: {fields: fields___date, order: DESC}) {
        nodes {
            id
            fields {
                date(formatString: "MMMM DD, YYYY")
                path
            }
            frontmatter {
                title
            }
         }
    }
  }
`;

export default BlogTemplate;