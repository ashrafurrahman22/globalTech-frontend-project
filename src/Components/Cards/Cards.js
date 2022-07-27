import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = () => {

    const [card, setCard] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])

    return (
        <div style={{fontFamily:"inter", letterSpacing:"2px"}} className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid-cols-1 lg:px-12 px-5  lg:gap-10 md:gap-8 text-black'>
            {
                card.map(singleCard => <SingleCard
                id = {singleCard.id}
                singleCard = {singleCard}
                ></SingleCard> )
            }
        </div>
    );
};

export default Cards;