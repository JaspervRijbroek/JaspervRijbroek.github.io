import React from "react"
import DefaultTemplate from "./default";

const PageTemplate = ({children, isHome}) => {
    return (
        <DefaultTemplate isPage={true} isHome={isHome}>
            {children}
        </DefaultTemplate>
    )
};

export default PageTemplate;