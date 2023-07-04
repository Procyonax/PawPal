import React from "react";
import "./styles.css/Result.css";
import "../App.css";
import { Link } from "react-router-dom";

const ResultCard = ({ breed }) => {
  return (
    <div>
      <Link to={"/detailbreed/" + breed.id}>
        <img
          src={`../Images/${breed.image}`}
          alt={`${breed.name}`}
          className="carousel-img"
        />
        <div>
          <h2 className="result-card-name">{breed.name}</h2>
        </div>
        <p className="result-card-description">{breed.description}</p>
      </Link>
    </div>
  );
};

export default ResultCard;
