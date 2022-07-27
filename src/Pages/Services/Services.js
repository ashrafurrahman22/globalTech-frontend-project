import React from 'react';
import Cards from '../../Components/Cards/Cards';
import Plane from '../../Components/Plane/Plane';

const Services = () => {
    return (
        <div className='min-h-screen my-10'>

            <div className='mx-20'>
                <Plane></Plane>
            </div>

            <div style={{fontFamily:"inter", letterSpacing:'2px'}} className='text-center my-8'>
                <h3 className='text-xl'>Services</h3>
                <h1 className='text-2xl font-semibold'>We provides services to our clients</h1>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Services;