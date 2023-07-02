import React from 'react';
import {Link} from 'react-router-dom'
import "./BreedCard.css";

const BreedCard = ({breed})=>{


return(
    <Link to={"/detailbreed/" + breed.id}>
            <img className='breed-card-image'
            src={`../images/${breed.image}`}
            alt="dog"
            />
        <h2>{breed.name}</h2>
    </Link>
)

}

export default BreedCard