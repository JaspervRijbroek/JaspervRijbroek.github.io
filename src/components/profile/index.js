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
            <section className="profile__wrapper">
                <header className="profile__header">
                    <Link to='/about' title='About'>
                        <span>
                            <Img fluid={data.placeholderImage.childImageSharp.fluid} className="profile__avatar" />
                        </span>
                    </Link>

                    <h1 className="profile__title">{data.site.siteMetadata.me.title}</h1>
                    <h2 className="profile__slogan">{data.site.siteMetadata.me.slogan}</h2>
                </header>
            </section>
        );
    }

    return (
        <footer className="profile profile--footer">
            <Link to='/about'>
                <span>
                    <Img className="profile__avatar" fluid={data.placeholderImage.childImageSharp.fluid}/>
                </span>
                <div className="profile__meta">
                    <span className="profile__title">{data.site.siteMetadata.me.title}</span>
                    <span className="profile__slogan">{data.site.siteMetadata.me.slogan}</span>
                </div>
            </Link>
        </footer>
    )

};