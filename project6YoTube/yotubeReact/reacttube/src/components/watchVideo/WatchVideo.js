import React from 'react';
import Video from '../video/Video';  
import Header from '../header/Header';
import VideoList from '../videoList/VideoList';

function WatchVideo({videoData, onChildClick}) {
    return (
      <div>
        <Header onChildClick={onChildClick} />
        <Video
          key={videoData.firstVideo.id.videoId}
          videoData={videoData.firstVideo}
        />
        
        <VideoList videoData={videoData.videos.slice(1)} />
      </div>
    );
}

export default WatchVideo;
