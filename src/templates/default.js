import React, {Component} from "react"
import {Profile} from "../components/profile/index";
import Footer from "../components/footer/index";
import {Helmet} from "react-helmet";
import Navigation from "../components/navigation/index";
import {ThemeContext} from "../components/context/theme";

export default class DefaultTemplate extends Component {
    constructor() {
        super();

        this.state = {
            theme: typeof window !== `undefined` ? (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : false,
            toggleTheme: this.toggleTheme.bind(this)
        }
    }

    toggleTheme() {
        this.setState(state => ({
            theme:
                state.theme === 'dark' ? 'light' : 'dark',
        }));
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <ThemeContext.Consumer>
                    {(theme) => {
                        return (<Helmet>
                            <html lang="en"/>
                            <meta charSet="utf-8"/>
                            <meta name="description" content="Personal ramblings of a professional developer"/>
                            <meta name="author" content="Jasper van Rijbroek"/>
                            <body className={this.state.theme ? `theme-${this.state.theme}` : ''}/>
                        </Helmet>);
                    }}
                </ThemeContext.Consumer>

                <Navigation isHome={this.props.isHome}/>

                {this.props.isPage && (<Profile/>)}

                <section className={'wrapper' + (this.props.isHome ? ' home' : '')}>
                    {this.props.children}

                    <Footer/>
                </section>
            </ThemeContext.Provider>
        )
    }
};