import React from 'react';
import './App.css';
import VideoList from './components/VideoList';
import Header from './components/header/Header';

function App() {
  return (
    <div className="nav1">
       <Header />
       <VideoList />
    </div>
  );
}

export default App;
