import React from 'react';
import Video from '../video/Video';  
import Header from '../header/Header';
import VideoList from '../videoList/VideoList';
import './watchVideo.css';

// when component 'Video', 'VideoList' is in this component, 'WatchVideo'
// CSS Display: none will hide some elements and also change size or relative locations of some
// features differently. Solely by CSS 'watchOn' change

function WatchVideo({videoData, onChildClick, watchOn}) {
    return (
      <div>
        <Header onChildClick={ onChildClick } />
        <div className="defaultWatch">
          <Video
            key={ videoData.firstVideo.id.videoId }
            videoData={ videoData.firstVideo } 
            watchOn={ watchOn = true }
          />
          <VideoList videoData={ videoData.videos.slice(1) } 
            watchOn={ watchOn = false}/>
        </div>
      </div>
    );
}

export default WatchVideo;
