import React from 'react';
import Video from '../video/Video';
import './videoList.css'

function VideoList({videoData}) {

  

    return (
        
        <div>
            <h3 className="category">Recommended</h3>
            {console.log({videoData})}
            <ul className="videoList">
                {console.log({ videoData })}
             
                <li className="video"> <Video videoData={videoData}/> </li>
            </ul>
        </div>
    )
}

export default VideoList;
