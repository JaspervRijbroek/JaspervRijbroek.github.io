import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby";
import Img from "gatsby-image"

export const Profile = ({isFooter = false}) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          me {
            title,
            slogan
          }
        }
      },
      placeholderImage: file(relativePath: { eq: "avatar@2x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    if (!isFooter) {
        return (
            <div className="profile">
                <section id="wrapper">
                    <header id="header">
                        <Link to='/about'>
                            <span id="avatar">
                                <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
                            </span>
                        </Link>

                        <h1>{data.site.siteMetadata.me.title}</h1>
                        <h2>{data.site.siteMetadata.me.slogan}</h2>
                    </header>
                </section>
            </div>
        );
    }

    return (
        <Link to='/about'>
            <span className="avatar">
                <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
            </span>
            <div>
                <span className="dark">{data.site.siteMetadata.me.title}</span>
                <span>{data.site.siteMetadata.me.slogan}</span>
            </div>
        </Link>
    )

};