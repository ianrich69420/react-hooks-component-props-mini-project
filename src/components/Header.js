import React from 'react';

function Header(blogData) {
    return (
        <header>
            <h1>{blogData.name}</h1>
        </header>
    )
}

export default Header
