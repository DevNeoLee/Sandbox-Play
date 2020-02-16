import React from 'react';
import './App.css';
import VideoList from './components/VideoList';
import Hearder from './components/header/Hearder';

function App() {
  return (
    <div className="App">
       <Hearder />
       <VideoList />
    </div>
  );
}

export default App;
