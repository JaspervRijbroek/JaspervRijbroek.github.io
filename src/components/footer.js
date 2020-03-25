import React from "react"
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          me {
            title,
            slogan
          }
        }
      }
    }
  `);

    return (
        <footer id="footer">
            <p className="small">© Copyright 2019 {data.site.siteMetadata.me.title}</p>
        </footer>
    );
}

export default Footer;
