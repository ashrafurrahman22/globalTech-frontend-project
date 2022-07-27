import React from 'react';
import Cards from '../../Components/Cards/Cards';
import Plane from '../../Components/Plane/Plane';
import '../../Styles/Plane.css'

const Services = () => {
    return (
        <div className='min-h-screen my-10'>

            <div id='myPlane' className='px-12 relative'>
                <Plane></Plane>
            </div>

            <div style={{fontFamily:"inter", letterSpacing:'2px'}} className='text-center my-8 pt-20'>
                <h3 className='text-xl'>Services</h3>
                <h1 className='text-2xl font-semibold'>We provides services to our clients</h1>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Services;