import React from "react"
import Header from "../components/header";
import PropTypes from "prop-types";
import {Profile} from "../components/profile";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";

const DefaultTemplate = ({children, isHome = false, isPage = false}) => {
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <meta name="description" content="Personal ramblings of a professional developer" />
                <meta name="author" content="Jasper van Rijbroek" />
            </Helmet>

            <Header isHome={isHome} />

            {isPage && (<Profile />)}

            <section id="wrapper" className={isHome ? 'home' : ''}>
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