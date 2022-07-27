import React from 'react';
import Heading from '../../Components/Heading/Heading';
import Plane from '../../Components/Plane/Plane';
import SolarSystem from '../../Components/SolarSystem/SolarSystem';
import '../../Styles/Home.css'

const Home = () => {
    return (
        <div className='min-h-screen mx-20 py-8'>

            <div className="lg:grid grid-cols-2">

            <div className='flex flex-col lg:relative gap-8'>
                
            <div id='homePlane' className='relative'>
                <Plane></Plane>
            </div>
                
             <div>
                    
            <Heading></Heading>
            
             </div>
            </div>

            <div className='lg:relative'>
                <SolarSystem></SolarSystem>
            </div>

            </div>

        </div>
    );
};

export default Home;