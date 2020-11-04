import React from "react"
import {Link} from 'gatsby'

const Navigation = ({isHome, pages}) => (
    <nav className="nav__main">
        {!isHome && (<Link to="/" className="nav__link"> <span className="arrow">←</span> Home </Link> )}

        {pages && pages.length > 0 && pages.map(page => (<Link to={`/${page.node.slug}`} className="nav__link">{page.node.title}</Link>))}
    </nav>
);

export default Navigation;
