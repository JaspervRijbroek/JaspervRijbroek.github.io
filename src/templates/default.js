import React from "react"
import PropTypes from "prop-types";
import {Profile} from "../components/profile/index";
import Footer from "../components/footer/index";
import {Helmet} from "react-helmet";
import Navigation from "../components/navigation/index";
import {graphql, useStaticQuery} from "gatsby";

const DefaultTemplate = ({children, isHome = false, isPage = false}) => {
    let pages = useStaticQuery(graphql`
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

    return (
        <div>
            <Helmet>
                <html lang="en"/>
                <meta charSet="utf-8"/>
                <meta name="description" content="Personal ramblings of a professional developer"/>
                <meta name="author" content="Jasper van Rijbroek"/>
            </Helmet>

            <Navigation isHome={isHome} pages={pages.allContentfulPage.edges}/>

            {isPage && (<Profile/>)}

            <section className={'wrapper' + (isHome ? ' home' : '')}>
                {children}

                <Footer/>
            </section>
        </div>
    )
};

DefaultTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultTemplate