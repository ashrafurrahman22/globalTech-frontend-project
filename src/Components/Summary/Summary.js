import React from 'react';
import { faFileCircleCheck, faSackDollar, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

const Summary = () => {
    return (
        <div style={{fontFamily:"inter", letterSpacing:"2px", color:"#28ACE2"}} className='my-14 text-white rounded-xl px-10 py-6'>
        <h2 className='text-center font-light uppercase text-3xl my-8'>Business Summary</h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-6 my-5'>
            <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-2xl my-2' icon={faUserFriends}></FontAwesomeIcon>
            <h2 className="text-3xl font-medium ">
            <CountUp 
                end={77}
                duration={6}
            />K+</h2>

           


            <p>Customers</p>
            </div>
            <div className='text-center'>
            <FontAwesomeIcon style={{color:"#D0F344"}} className='text-2xl my-2' icon={faSackDollar}></FontAwesomeIcon>
            <h2 className="text-3xl font-medium ">
            <CountUp 
                end={132}
                duration={6}
            />
                M+</h2>
            <p>Annual Revenue</p>
            </div>
            <div className='text-center'>
            <FontAwesomeIcon style={{color:"#D0F344"}} className='text-2xl my-2' icon={faFileCircleCheck}></FontAwesomeIcon>
            <h2 className="text-3xl font-medium ">
            <CountUp 
                end={100}
                duration={6}
            />+</h2>
            <p>Projects Completed</p>
            </div>

            <div className='text-center'>
            <FontAwesomeIcon style={{color:"#D0F344"}} className='text-2xl my-2' icon={faStar}></FontAwesomeIcon>
            <h2 className="text-3xl font-medium ">
            <CountUp 
                end={68}
                duration={6}
            />
                k+</h2>
            <p>Reviews</p>
            </div>
        </div>
    </div>
    );
};

export default Summary;