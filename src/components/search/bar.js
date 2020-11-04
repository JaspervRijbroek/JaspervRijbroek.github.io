import React from "react"

const SearchBar = (args) => (
    <div className="search">
        <input className="search__input" type="text" placeholder="Search" onKeyUp={args.onKeyUp}/>
    </div>
);

export default SearchBar