import React from "react"
import {graphql, Link, useStaticQuery} from 'gatsby'
import Switcher from "../switcher";

const Navigation = ({isHome}) => {
    const pages = useStaticQuery(graphql`
        query {
          allContentfulPage(sort: {fields: title, order: DESC}) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `);

    return (<nav className="nav__main">
        {!isHome && (<Link to="/" className="nav__link"> <span className="arrow">←</span> Home </Link>)}

        {pages.allContentfulPage && pages.allContentfulPage.edges && pages.allContentfulPage.edges.length > 0 && pages.allContentfulPage.edges.map((page, index) => (
            <Link to={`/${page.node.slug}`} className="nav__link" key={index}>{page.node.title}</Link>
        ))}

        <Switcher />
    </nav>);
};

export default Navigation;
