import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
      <div className="header">
        <NavLink exact to="/" className="item">Home</NavLink>
        <NavLink to="/about/john" className="item">About</NavLink>
        <NavLink to="/login" className="item">Login</NavLink>
        <NavLink to="/mypage" className="item">MyPage</NavLink>
        <NavLink to="/posts" className="item">Posts</NavLink>
        <NavLink to="/search" className="item">Search</NavLink>
      </div>
    );
}

export default Header;
