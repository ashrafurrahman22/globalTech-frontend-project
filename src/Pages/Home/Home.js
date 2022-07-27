import React from 'react';
import Heading from '../../Components/Heading/Heading';
import Plane from '../../Components/Plane/Plane';
import SolarSystem from '../../Components/SolarSystem/SolarSystem';

const Home = () => {
    return (
        <div className='min-h-screen mx-20 py-8'>

<SolarSystem></SolarSystem>
            {/* <div className="grid grid-cols-2">

            <div className='flex flex-col gap-8'>
            <Plane></Plane>
            <Heading></Heading>
            </div>

            <div>
                <SolarSystem></SolarSystem>
            </div>

            </div> */}

        </div>
    );
};

export default Home;