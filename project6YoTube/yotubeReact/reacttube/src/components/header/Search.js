import React from 'react';
import searchIcon from './searchIcon.png';

function Search() {

    const container = {
        flexGrow: "8",
        // background: "yellow",
        display: "flex",
        alignItems: "center",
        
    }

    const css = { 
        float: "none",
        textAlign: "left",
        font: "1rem",
        width: "80%",
        alignItems: "center",
        height: "1.5rem",
        margin: "0"
    }

    const buttonCSS = {
        width: "3rem",
        margin: "0",
        backgroundColor: "transparent",
        height: "1.85rem",
        cursor: "pointer",
        textAlign: "center",
        padding: "0.3rem 0"
    
    }
    return (
        <div style ={ container }>
            <input type="text" placeholder="search videos" style={css}/>
            <button style={ buttonCSS }><img src={ searchIcon } style={{ width:"1.25rem"}}/></button>
        </div>
    )
}

export default Search;
