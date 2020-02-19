import React from 'react';
import './video.css'


function Video({videoData}) {

    console.log({videoData})
    return (

      <article className="videoFrame">
          <video width="280" height="200" controls>
            <source src="#" type="video/mp4" />
          </video>
          <h3>{videoData.snippet.title}</h3>
          <h5>views</h5>
        <p><img />thumbsUp</p>
        <p><img />thumbsDown</p>
        <div><img /></div>
        <p>description</p>
      </article>
    )
}

export default Video;
