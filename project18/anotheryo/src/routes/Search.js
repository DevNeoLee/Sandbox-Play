import React from 'react';

function Search({location}) {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')}
        </div>
    )
}

export default Search;
