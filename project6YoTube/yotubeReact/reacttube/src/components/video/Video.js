import React from 'react';
import './video.css'


function Video({videoData}) {

    console.log({videoData})
    return (

      <article className="videoFrame" key={videoData.id}>
        <iframe width="290" height="150" src={`http://www.youtube.com/embed/${videoData.id.videoId}`} frameborder="0" allowFullScreen />
        <div className="textFrame">
          <h4>{videoData.snippet.title}</h4>
          <h5>{videoData.snippet.thumbnails.channelTitle}</h5>
          <p>{videoData.snippet.description}</p>
        </div>
      </article>
    )
}

export default Video;
