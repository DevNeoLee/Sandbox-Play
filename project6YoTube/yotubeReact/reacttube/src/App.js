import React from 'react';
import VideoList from './components/videoList/VideoList';
import SideMenu from './components/sideMenu/SideMenu';
import Header from './components/header/Header';
import yotube from './api/yotube';
import './App.css';

function App() {
  return (
      <div className="app">
        <Header />
        <div className="mainBody">
          <SideMenu />
          <VideoList />
        </div>
      </div>
      
  );
}

export default App;
