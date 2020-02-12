import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">홈 </NavLink>
            <NavLink to="/about/james" className="item">소개</NavLink>
            <NavLink to="/posts" className="item">포스트</NavLink>
        </div>
    );
}

export default Header;

