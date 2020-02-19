import React from 'react';
import hamMenuIcon from './hamMenuIcon.png';
import logoIcon from './yoTubeLogo.png';
import { findByLabelText } from '@testing-library/react';

function Menu() {

    const menuContainer = {
        // flexGrow: "1",
        display: "Grid",
        gridColumnGap: "1.1rem",
        gridTemplateColumns: "3rem 9rem",
        justifyContent: "center",
        alignItems: "center",
    }

    const hamMenu = {
        margin: "1.1rem",
        width: "1.8rem",
    }

    const logo = {
        width: "6.0rem",
        // grid: "1"
    }
    return (
        <div style={ menuContainer }>
            <img src={ hamMenuIcon } style={ hamMenu }/>
            <img src={logoIcon} style={ logo } />
        </div>
    )
}

export default Menu;
