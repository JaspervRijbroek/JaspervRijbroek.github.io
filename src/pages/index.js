import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import PageTemplate from "../templates/page";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
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
  `);

    return (
        <PageTemplate isHome={true}>

            <ul id="post-list">
                {data.allMarkdownRemark.edges.map(node => (
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
};

export default IndexPage
