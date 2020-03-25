import React from "react"
import "../assets/css/style.css"
import Header from "../components/header";
import PropTypes from "prop-types";
import {Profile} from "../components/profile";
import Footer from "../components/footer";

const DefaultTemplate = ({children, isHome = false, isPage = false}) => {
    return (
        <div>
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