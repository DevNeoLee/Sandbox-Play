import React, { Component } from 'react';
import VideoList from './components/videoList/VideoList';
import SideMenu from './components/sideMenu/SideMenu';
import Header from './components/header/Header';
import yotube from './api/yotube';
import './App.css';

export default class App extends Component {
    state = {
      videos: []
    }

  handleSubmit = async(searchTerm) => {

  const response = await yotube.get('search', {
    params: {
      part: "snippet",
      maxResults: 40,
      key: `AIzaSyCeCFeVFIlSPjwDclJxBKMTuVfnH43nCgQ`,
      q: searchTerm,
    }
  })
  
  this.setState({ videos: response.data.items });
}
   
  render() {
    return (
      <div className="app">
        <Header onChildClick={this.handleSubmit}/>
        <div className="mainBody">
          <SideMenu />
          <VideoList videoData = {this.state.videos}/>
        </div>
      </div>
    )
  }
}

