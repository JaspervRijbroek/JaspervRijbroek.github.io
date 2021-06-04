import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
      allContentfulAsset(filter: {contentful_id: {eq: "4D7wk8EA9cVB6z2QX5RtIX"}}) {
        edges {
          node {
            gatsbyImageData(
              width: 80
              height: 80
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
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
                        <span className='profile__avatar__container'>
                            <GatsbyImage image={getImage(data.allContentfulAsset.edges[0].node)} className="profile__avatar" style={{
                                position: 'absolute',
                                display: 'block'
                            }} />
                            <GatsbyImage image={getImage(data.allContentfulAsset.edges[0].node)} className="profile__avatar" style={{
                                position: 'absolute',
                                display: 'block'
                            }} />
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
                    <GatsbyImage image={getImage(data.allContentfulAsset.edges[0].node)} className="profile__avatar" />
                </span>
                <div className="profile__meta">
                    <span className="profile__title">{data.site.siteMetadata.me.title}</span>
                    <span className="profile__slogan">{data.site.siteMetadata.me.slogan}</span>
                </div>
            </Link>
        </footer>
    )

};