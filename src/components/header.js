import React from "react"
import {Link} from 'gatsby'

const Header = ({isHome}) => (
    <nav className="main-nav">
        {!isHome && (<Link to="/"> <span className="arrow">←</span> Home </Link> )}

        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
    </nav>
);

export default Header
