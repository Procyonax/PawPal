import React from 'react';
import {Link} from 'react-router-dom'

const BreedCard = ({breed})=>{


return(
    <div>
            <img
            src={`../images/${breed.image}`}
            style={{ width: "250px" }}
            alt="dog"
            />
        <Link to={"/detailbreed/" + breed.id}><h2>{breed.name}</h2></Link>
    </div>
)

}

export default BreedCard