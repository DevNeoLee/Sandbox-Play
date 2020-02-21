import React from 'react';
import Video from '../video/Video';
import './videoList.css'
import { NavLink } from 'react-router-dom';

function VideoList({videoData, watchOn }) {

    return (
      <div className="videoBody">
        <h3 className="category">Recommended</h3>

        <ul className="videoList">
          {videoData.map((video, id) => (
            <NavLink to="" style={{ textDecoration: "none" }}>
              <li className="video" key={id}>
                {" "}
                <Video key={id} videoData={video} watchOn={watchOn} />{" "}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    );
}

export default VideoList;
