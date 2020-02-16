import React from 'react';
import appIcons from './appIcons.png';
import createIcon from './createIcon.png';
import settingIcon from './settingIcon.png';
import notificationIcon from './notificationIcon.png';
import signinIcon from './signinIcon.png';


function Icons() {

    const container = {
        display: "Grid",
        gridColumnGap: "1.3rem",
        gridTemplateColumns: "auto auto auto auto",
        justifyContent: "center",
        alignItems: "center",
    }

    const create = {
        width: "1.7rem" 
    }

    const app = {
        width: "1.35rem"
    }

    const setting = {
        width: "1.4rem" 
    }

    const signin = {
        width: "7.3rem",
        padding: "0 0.7rem 0 0" 
    }

    return (
        <div style = { container }>
            <img src={ createIcon } style={ create }/>
            <img src={ appIcons } style={ app }/>
            <img src={ settingIcon } style={ setting }/>
            <img src={ signinIcon } style={ signin }/>
        </div>
    )
}

export default Icons;
