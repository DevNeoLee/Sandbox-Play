import React from 'react';
import './video.css';
import { NavLink, Link } from 'react-router-dom';

function Video({ videoData, watchOn }) {

    //conditional CSS setting for diffrent use of the component, 'Video'
      let elementOn = {}
      let elementOff = {}

      if (watchOn) {
        elementOn = {
          display: "block"
        };
        elementOff = {
          display: "none"
        }
      } else {
        elementOn = {
          display: "none"
        };
        elementOff = {
          display: "block"
        }
      }

    return (
      <article className="videoFrame" key={videoData.id}>
        <iframe
          width="1000"
          height="550"
          style={ elementOn }
          src={`http://www.youtube.com/embed/${videoData.id.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
        <NavLink to="/watch" style={{ textDecoration: "none" }}>
          <img
            src={videoData.snippet.thumbnails.medium.url}
            style={ elementOff }
          ></img>
          <div className="textFrame">
            <h4>{videoData.snippet.title}</h4>
            <h5>{videoData.snippet.channelTitle}</h5>
            <p style={ elementOn }>{videoData.snippet.description}</p>
          </div>
        </NavLink>
      </article>
    );
}

export default Video;
