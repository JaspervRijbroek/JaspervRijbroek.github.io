import React, {Component} from "react"
import {Profile} from "../components/profile/index";
import Footer from "../components/footer/index";
import {Helmet} from "react-helmet";
import Navigation from "../components/navigation/index";

export default class DefaultTemplate extends Component {
    constructor() {
        super();

        this.state = {
            theme: typeof window !== `undefined` ? (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : false
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <html lang="en"/>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="Personal ramblings of a professional developer"/>
                    <meta name="author" content="Jasper van Rijbroek"/>
                </Helmet>

                <Navigation isHome={this.props.isHome}/>

                {this.props.isPage && (<Profile/>)}

                <section className={'wrapper' + (this.props.isHome ? ' wrapper--home' : '')}>
                    {this.props.children}

                    <Footer/>
                </section>
            </div>
        )
    }
};