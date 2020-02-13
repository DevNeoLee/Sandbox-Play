import React from 'react';
import {Route, Link} from 'react-router-dom';

function Post({ match }) {
    return <div style={ {color: 'red'}}>{ match.params.title}입니다!</div>;
}

function Posts() {
    return (
      <div>
        포스트 입니다.<br />
        <Link to="/posts/엉호홍">react</Link>
        <br />
        <Link to="/posts/뭐라공">redux</Link>
        <br />
        <Link to="/posts/고동도옹">html</Link>
        <br />
        <Link to="/posts/g도리">css</Link>
        <br />
        <Route path="/posts/:title" component={Post} />
      </div>
    );
}

export default Posts;
