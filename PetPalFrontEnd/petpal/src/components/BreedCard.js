import React from "react";
import { Link } from "react-router-dom";
import "./BreedCard.css";

const BreedCard = ({breed})=>{


return(
    <div className="breed-card-container">
    <div className='hover-links'>
    <Link className='breed-link' to={"/detailbreed/" + breed.id}>
            <img className='breed-card-image'
            src={`../images/${breed.image}`}
            alt="dog"
            />
        <h2 className='breed-name'>{breed.name}</h2>
    </Link>
    </div> 
    </div>
)

}

export default BreedCard;
