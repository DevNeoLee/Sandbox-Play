import React from 'react';
import './video.css'

function Video({ videoData, watchOn }) {

    //conditional CSS setting for diffrent use of the component, 'Video'
      let cssVideo = {}
      let cssThumb = {}
      
      if (watchOn) {
        cssVideo = {
          display: "block"
        };
        cssThumb = {
          display: "none"
        };
      } else {
        cssVideo = {
          display: "none"
        };
        cssThumb = {
          display: "block"
        };
      }

    return (


      <article className="videoFrame" key={videoData.id}>
        <iframe width="950" height="550" style={ cssVideo }src={`http://www.youtube.com/embed/${videoData.id.videoId}`} frameBorder="0" allowFullScreen />
        <img src={videoData.snippet.thumbnails.medium.url} style={ cssThumb } ></img>
        <div className="textFrame">
          <h4 style={ cssVideo }>{videoData.snippet.title}</h4>
          <h1>{videoData.snippet.channelTitle}</h1>
          <p style={ cssVideo }>{videoData.snippet.description}</p>
        </div>
      </article>
    )
}

export default Video;
