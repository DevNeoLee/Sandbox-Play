import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';


function App() {
  return (
   
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/about/:username" component={About} />
        <Route path="/posts" component={Posts} />
      </div>  
    </Router>
  );
};

export default App;


