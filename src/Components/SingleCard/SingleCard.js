import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/SingleCard.css'

const SingleCard = ({singleCard}) => {

    const {title, description, img} = singleCard;

    return (
        <div class="card lg:w-96 lg:my-0 md:my-0 my-10 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 style={{color:"#2397CD"}} class="card-title justify-center my-2">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-center">
      <button id='button' class="btn btn-primary font-medium px-16">More</button>
    </div>
  </div>
</div>
    );
};

export default SingleCard;