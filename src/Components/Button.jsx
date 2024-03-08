import React from 'react';

function Button({ title = "Nothing" }) {
    return (
        <>
        <button className='btn'>{title}</button>
        </>
    );
}

export default Button;