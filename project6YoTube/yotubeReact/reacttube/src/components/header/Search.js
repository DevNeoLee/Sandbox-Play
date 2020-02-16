import React from 'react';
import searchIcon from './searchIcon.png';

function Search() {
    const css = { 
        width: "18rem",
        height: "1.5rem"
    }

    const buttonCSS = {
        width: "5rem",
        height: "1.6rem",
        backgroundColor: "white",
        // border: "none",
        cursor: "pointer",
        textAlign: "center",
        display: "inline-block"
    }
    return (
        <div>
            <input type="text" placeholder="search videos" style={css}/>
            <button style={ buttonCSS }><img src={ searchIcon } style={{ width:"1.25rem"}}/></button>
        </div>
    )
}

export default Search;
