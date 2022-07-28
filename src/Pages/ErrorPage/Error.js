import React from 'react';

const Error = () => {
    return (
        <div style={{fontFamily:"Inter", letterSpacing:"2px"}} className='flex justify-center min-h-screen items-center'>
            <div className='flex flex-col text-center'>
            <h1 style={{color:"#D0F344"}} className='text-9xl font-semibold'>404!</h1>
            <h1 style={{color:"#28ACE2"}} className='text-5xl font-semibold'>Sorry! Page Not Found.</h1>
            </div>
        </div>
    );
};

export default Error;