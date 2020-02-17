import React from 'react';
import PersonList from './components/PersonList';
import TodoList from './components/TodoList';
import CommentList from './components/CommentList';
import PictureList from './components/PictureList';

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>

      <h1 >API Testing</h1>
      <h2>Axios</h2>
      <hr/>

      <div>
        {/* <PersonList />
        <hr />
        <TodoList />
        <hr />
        <CommentList /> */}
        <hr />
        <PictureList />
      </div>
     



      



    </div>
    
  );
};

export default App;