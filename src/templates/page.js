import React from "react"
import DefaultTemplate from "./default";
import {Helmet} from "react-helmet";

function getPageTitle(isHome, context) {
    if (isHome) {
        return 'Home';
    }

    return context.frontmatter.title;
}

const PageTemplate = ({children, isHome, pageContext}) => {
    return (
        <DefaultTemplate isPage={true} isHome={isHome}>
            <Helmet>
                <title>{getPageTitle(isHome, pageContext)} | Jvar</title>
            </Helmet>

            {children}
        </DefaultTemplate>
    )
};

export default PageTemplate;