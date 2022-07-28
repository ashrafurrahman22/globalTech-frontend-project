import React from 'react';
import Heading from '../../Components/Heading/Heading';
import Plane from '../../Components/Plane/Plane';
import SolarSystem from '../../Components/SolarSystem/SolarSystem';
import Summary from '../../Components/Summary/Summary';
import '../../Styles/Home.css'

const Home = () => {
    return (
        <div className='min-h-screen mx-20 py-8'>

            <div className="lg:grid grid-cols-2">

            <div className='flex flex-col lg:relative relative gap-8'>
                
            <div id='homePlane' className='lg:relative'>
                <Plane></Plane>
            </div>
             <div>
            <Heading></Heading>
            
             </div>
            </div>

            <div className='lg:relative relative py-36'>
                <SolarSystem></SolarSystem>
            </div>

            </div>

            <div>
                <Summary></Summary>
            </div>

        </div>
    );
};

export default Home;