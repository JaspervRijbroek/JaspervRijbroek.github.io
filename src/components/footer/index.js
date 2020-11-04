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
        <footer className="footer">
            <p className="small">© Copyright {(new Date()).getFullYear()} {data.site.siteMetadata.me.title}</p>
        </footer>
    );
};

export default Footer;