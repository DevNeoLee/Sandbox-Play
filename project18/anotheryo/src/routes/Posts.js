import React from 'react';
import {Route, Link} from 'react-router-dom';

function Posts() {
    return (
      <div>
        포스트
        <Link to="/posts/react">react</Link>
        <br />
        <Link to="/posts/react">redux</Link>
        <br />
        <Link to="/posts/react">html</Link>
        <br />
        <Link to="/posts/react">css</Link>
        <br />
      </div>
    );
}

export default Posts;
