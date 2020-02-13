import React from 'react';

function Home({history}) {
    return (
        <div>
            <button onClick={()=>{history.push('posts')}}>버튼</button>
            홈입니다.
        </div>
    )
}

export default Home;
