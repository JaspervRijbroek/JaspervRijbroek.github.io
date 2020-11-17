import React from "react"
import {ThemeContext} from "../context/theme";

export default class Switcher extends React.Component {
    toggleColorScheme() {
        this.props.dispatch({type: 'toggleColorScheme'})
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {(value) => (
                    <span onClick={value.toggleTheme} className={'nav__link theme-switcher icon-' + (value.theme === 'dark' ? 'sun' : 'moon')} />
                )}
            </ThemeContext.Consumer>
        );
    }
}