import React, { Component } from 'react';
import VideoList from './components/videoList/VideoList';
import SideMenu from './components/sideMenu/SideMenu';
import Header from './components/header/Header';
import yotube from './api/yotube';
import './App.css';

export default class App extends Component {
    state = {
      videos: [],
      selectedVideo: null,
    }

  handleSubmit = async(searchTerm) => {

  const response = await yotube.get('search', {
    params: {
      part: "snippet",
      maxResults: 5,
      key: `AIzaSyCeCFeVFIlSPjwDclJxBKMTuVfnH43nCgQ`,
      q: searchTerm,
    }
  })
  
  this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  console.log(this.state);
}
   
  render() {
    return (
      <div className="app">
        <Header onChildClick={this.handleSubmit}/>
        <div className="mainBody">
          <SideMenu />
          <VideoList videoData = {this.state}/>
        </div>
      </div>
    )
  }
}

