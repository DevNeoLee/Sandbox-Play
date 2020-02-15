import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import About from "./routes/About";
import Posts from "./routes/Posts";
import Search from "./routes/Search";
import NotFound from "./routes/NotFound";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";

function App() {

  function SayHello(props) {
    return (<div>
                <h3>reminder:</h3>
                <Yo>{props.children}</Yo>
                <Ma>Josh{props.children}</Ma>
                <p>oea;ijfea;oifjeo;ijf;oeajfo;aejf;oeijfo;eijfio;ejblablalblablablablabl</p>
            </div>);
  }
  function Yo(props) {
    return (<div>
              <h2>Jamie{props.children}</h2>
            </div>);
  }

  function Ma(props) {
    return (<div>maimai</div>)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <SayHello />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/posts" component={Posts} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
