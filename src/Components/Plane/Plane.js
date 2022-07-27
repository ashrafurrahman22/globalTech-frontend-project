import React from 'react';
import plane from '../../assets/Vector.png';
import '../../Styles/Plane.css'

const Plane = () => {
    return (
        <div>

            <div className="flex justify-between">


                
                {/* main div */}
            <div className='flex items-center'>
                <div>
                <div className='flex flex-col'>
                <div style={{backgroundColor: "#28ACE2", height:"0.5px" }} className='my-1 w-14'></div>
                <div style={{backgroundColor: "#28ACE2", height:"0.5px" }} className='my-1 w-14'></div>
                <div style={{backgroundColor: "#28ACE2", height:"0.5px" }} className='my-1 w-14'></div>
            </div>
                </div>
            <img src={plane} alt="" />
            </div>
           </div>







        </div>
    );
};

export default Plane;