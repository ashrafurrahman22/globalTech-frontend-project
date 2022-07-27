import React from 'react';
import '../../Styles/SolarSystem.css'

const SolarSystem = () => {
    return (
        <div>
            
            <div className="space">
                <span id='span' className='sun'></span>
                <span id='span' className='planet planet1'></span>
                <span id='span' className='planet planet2'></span>
                <span id='span' className='planet planet3'></span>
            </div>

        </div>
    )
}

export default SolarSystem;