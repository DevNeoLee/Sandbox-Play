import React from 'react';
import { Route, Link} from 'react-router-dom';

function Post({ match }) {
  return <div>{match.params.title} 입니다.</div>;
}


function Posts() {
    return (
      <div>
        <h1> 포스트 입니다.</h1>
        <Link to="/posts/react">리액트</Link>
        <br />
        <Link to="/posts/redux">리덕스</Link>
        <br />
        <Link to="/posts/css">씨에스에스</Link>
        <br />
        <Route path="/posts/:title" component={Post} />
      </div>
    );
}



export default Posts;
 