import React from 'react';
import Video from '../video/Video';
import './videoList.css'

function VideoList({videoData}) {

  

    return (
        
        <div>
            <h3 className="category">Recommended</h3>
            
            <ul className="videoList">
                {videoData.map((video) => 
                    (<li className="video"> <Video videoData={video} /> </li>)
                )}
                
            </ul>
        </div>
    )
}

export default VideoList;
