import React from "react"
import PropTypes from "prop-types";
import {Profile} from "../components/profile/index";
import Footer from "../components/footer/index";
import {Helmet} from "react-helmet";
import Navigation from "../components/navigation/index";
import {Provider} from 'react-redux';
import {store} from '../state';
import ColorSchemeLayout from "../components/layout";

const DefaultTemplate = ({children, isHome = false, isPage = false}) => {
    return (
        <Provider store={store} className>
            <ColorSchemeLayout>
                <Helmet>
                    <html lang="en"/>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="Personal ramblings of a professional developer"/>
                    <meta name="author" content="Jasper van Rijbroek"/>
                </Helmet>

                <Navigation isHome={isHome}/>

                {isPage && (<Profile/>)}

                <section className={'wrapper' + (isHome ? ' home' : '')}>
                    {children}

                    <Footer/>
                </section>
            </ColorSchemeLayout>
        </Provider>
    )
};

DefaultTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultTemplate