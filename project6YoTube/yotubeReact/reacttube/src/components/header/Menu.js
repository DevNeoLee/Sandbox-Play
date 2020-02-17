import React from 'react';
import hamMenuIcon from './hamMenuIcon.png';
import logoIcon from './yoTubeLogo.png';
import { findByLabelText } from '@testing-library/react';

function Menu() {

    const container = {
        flexGrow: "1",
        // background: "lightblue",
        display: "Grid",
        gridColumnGap: "1.3rem",
        gridTemplateColumns: "auto auto",
        justifyContent: "center",
        alignItems: "center",
    }

    const hamMenu = {
        width: "1.8rem",
        // padding: "0 0 0 1.5rem ",
        // grid: "1"
    }

    const logo = {
        width: "6.0rem",
        // grid: "1"
    }
    return (
        <div style={ container }>
            <img src={ hamMenuIcon } style={ hamMenu }/>
            <img src={logoIcon} style={ logo } />
        </div>
    )
}

export default Menu;
