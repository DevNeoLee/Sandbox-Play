import React from 'react';
import { Redirect} from 'react-router-dom';

const logged = false;

function MyPage() {
    return (
        <div>
            {!logged && <Redirect to="/login" />}
        </div>
    )
}

export default MyPage;
