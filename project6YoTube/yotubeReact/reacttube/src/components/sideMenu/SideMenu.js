import React from 'react';
import './sideMenu.css';
import homeIcon from './homeIcon.png';
import trendingIcon from './trendingIcon.png';
import subscriptionIcon from './subscriptionIcon.png';
import originalIcon from './originalIcon.png';

function SideMenu() {
    return (
        <ul className="sideList">
            <li className="sideItem"><img src={ homeIcon } /> Home</li>
            <li className="sideItem"><img src={ trendingIcon } /> Trending</li>
            <li className="sideItem"><img src={ subscriptionIcon } /> Subscriptions</li>
            <hr />
            <li className="sideItem"><img src={ originalIcon } /> Originals</li>
           
        </ul>
    )
}

export default SideMenu;
