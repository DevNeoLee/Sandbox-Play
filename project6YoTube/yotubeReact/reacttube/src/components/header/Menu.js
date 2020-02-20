import React from 'react';
import hamMenuIcon from './hamMenuIcon.png';
import logoIcon from './yoTubeLogo.png';

function Menu() {

  
    return (
        <div className="menuContainer" >
            <img src={ hamMenuIcon } className="hamMenu"/>
            <img src={ logoIcon } className="logo" />
        </div>
    )
}

export default Menu;
