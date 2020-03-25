import React from "react"
import DefaultTemplate from "./default";
import {graphql} from "gatsby";
import {Profile} from "../components/profile";

const BlogTemplate = ({data}) => {
    return (
        <DefaultTemplate>
            <article className="post">
                <header>
                    <h1>{data.markdownRemark.frontmatter.title}</h1>
                    <h2 className="headline">{data.markdownRemark.fields.date}</h2>
                </header>
                <section id="post-body" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
            </article>
            <footer id="post-meta" className="clearfix">
                <Profile isFooter={true}/>
            </footer>
        </DefaultTemplate>
    )
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      fields {
        date(formatString: "MMMM DD, YYYY")
        path
      }
      frontmatter {
        title
        description
      }
    }
  }
`;

export default BlogTemplate;