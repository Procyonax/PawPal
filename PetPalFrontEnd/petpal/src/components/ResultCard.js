import React from 'react';
import './Result.css'
import '../App.css'

const ResultCard = ({breed}) => {
  return (
    <div>
      <img src={`../Images/${breed.image}`} alt={`${breed.name}`} className="carousel-img" />
      <div>
        <h2 className='result-card-name'>{breed.name}</h2>
      </div>
      <p className='result-card-description'>{breed.description}</p>
    </div>
  );
};

export default ResultCard;
