import React from 'react';
import '../../Styles/HeadingBtn.css'

const Heading = () => {
    return (
        <div style={{fontFamily:"inter", letterSpacing:"2px"}}>
            <h1 style={{color:"#28ACE2"}} className='lg:text-8xl font-extrabold'>Welcome to</h1>
            <h1 style={{color:"#D0F344"}} className='lg:text-8xl font-extrabold'>GlobeTech</h1>
            <p style={{color:"#2EBBE5"}}>We are committed to deliver <span style={{color:"#9EB540"}} className="font-bold"> best IT services</span> . Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
            <div className='flex gap-4 my-5'>
            <button id='supportBtn' className='btn'>Support Us</button>
            <button id='missionBtn' className='btn font-medium'>Our Mission</button>
            </div>
        </div>
    );
};

export default Heading;