import React from "react";
import { Link } from "react-router-dom";
import "./styles.css/BreedCard.css";

const BreedCard = ({ breed }) => {
  return (
    <a className="hover-links">
      <Link className="breed-link" to={"/detailbreed/" + breed.id}>
        <img
          className="breed-card-image"
          src={`../images/${breed.image}`}
          alt="dog"
        />
        <h2 className="breed-name">{breed.name}</h2>
      </Link>
    </a>
  );
};

export default BreedCard;
