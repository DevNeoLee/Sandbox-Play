import React from 'react';
import './sideMenu.css';
import homeIcon from './homeIcon.png';
import trendingIcon from './trendingIcon.png';
import subscriptionIcon from './subscriptionIcon.png';
import originalIcon from './originalIcon.png';

function SideMenu() {
    return (
        <ul className="sideList">
            <li className="sideItem"><img src={homeIcon} /> <p>Home</p></li>
            <li className="sideItem"><img src={trendingIcon} /> <p>Trending</p></li>
            <li className="sideItem"><img src={subscriptionIcon} /> <p>Subscriptions</p></li>
            <li className="sideItem"><img src={originalIcon} /> <p>Originals</p></li>
            <hr />
        </ul>
    )
}

export default SideMenu;
