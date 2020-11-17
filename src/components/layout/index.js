import React from "react"
import {connect} from 'react-redux';
import {Helmet} from "react-helmet";

/**
 * Layout component to show the colorScheme
 * @param colorScheme
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const ColorSchemeLayout = ({colorScheme, children}) => (
    <div>
        <Helmet>
            <body className={colorScheme ? `theme-${colorScheme}` : ''}></body>
        </Helmet>

        {children}
    </div>
);

export default connect((state) => {
    let {colorScheme} = state;

    return {
        colorScheme
    };
})(ColorSchemeLayout)