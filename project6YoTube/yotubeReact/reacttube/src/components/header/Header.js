import React, { Fragment } from 'react';
import { Menu, Search, Icons } from '.';
import './Header.css';


function Hearder() {
    return (
        <div className="container">
            <Menu className="menu" />
            <Search className="search"/>
            <Icons className="icons"/>
        </div>
    )
}

export default Hearder;
