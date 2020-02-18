import React, { Component } from 'react';
import Video from '../video/Video';
import './videoList.css'

export default class VideoList extends Component {
    render() {
        return (
            <div>
                <h3 className="category">Recommended</h3>
                <ul className="videoList">
                    <li className="video"> 1<Video /> </li>
                    <li className="video"> 2<Video /> </li>
                    <li className="video"> 3<Video /> </li>
                    <li className="video"> 4<Video /> </li>
                    <li className="video">5<Video /> </li>
                    <li className="video">6<Video /> </li>
                    <li className="video"> 7<Video /> </li>
                    <li className="video"> 8<Video /> </li>
                    <li className="video"> 9<Video /> </li>
                    <li className="video"> 10<Video /> </li>
                    <li className="video"> 11<Video /> </li>
                    <li className="video"> 12<Video /> </li>
                </ul>
            </div>
            
        )
    }
}
