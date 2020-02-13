import React from 'react';

function Home({history}) {
    return (
        <div>
            홈입니다.
            <button onClick={()=>{history.push('/posts')}}>버튼</button>
        </div>
    )
}

export default Home;
