import React from "react"
import {connect} from 'react-redux';

class Switcher extends React.Component {
    toggleColorScheme() {
        this.props.dispatch({type: 'toggleColorScheme'})
    }

    render() {
        return (
            <span onClick={this.toggleColorScheme.bind(this)} className={'nav__link theme-switcher icon-' + (this.props.colorScheme === 'dark' ? 'sun' : 'moon')} />
        );
    }
}

export default connect((state) => {
    let {colorScheme} = state;

    return {
        colorScheme
    };
})(Switcher)