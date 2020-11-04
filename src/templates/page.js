import React from "react"
import DefaultTemplate from "./default";
import {Helmet} from "react-helmet";

function getPageTitle(isHome, context) {
    if (isHome) {
        return 'Home';
    }

    return context.page.node.title;
}

const PageTemplate = ({children, isHome, pageContext}) => {
    return (
        <DefaultTemplate isPage={true} isHome={isHome}>
            <Helmet>
                <title>{getPageTitle(isHome, pageContext)} | Jvar</title>
            </Helmet>

            {children}

            {!children && (<section className="post__body" dangerouslySetInnerHTML={{__html: pageContext.page.node.body.childMarkdownRemark.html}}/>)}
        </DefaultTemplate>
    )
};

export default PageTemplate;