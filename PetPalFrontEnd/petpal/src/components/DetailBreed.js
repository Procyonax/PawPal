import React from "react";
import "./styles.css/DetailBreed.css";
import PawPrint from "../icons/pawprint.svg";

const DetailBreed = ({ breed }) => {
  console.log(breed);
  return (
    <div className="detail-breed">
      <img
        className="dog-image-detail"
        src={`../images/${breed.image}`}
        alt="dog"
      />
      <h2>{breed.name}</h2>
      <p>{breed.description}</p>
      <h3>
        <img src={PawPrint} aria-hidden alt="paw-print-icon" /> Ratings{" "}
        <img src={PawPrint} aria-hidden alt="paw-print-icon" />
      </h3>
      <ul className="ratings-list">
        <li>Trainability: {breed.trainability}</li>
        <li>Health Issues: {breed.healthIssues}</li>
        <li>Exercise Needed: {breed.exerciseNeeded}</li>
        <li>Size: {breed.size}</li>
        <li>Drooling: {breed.drooling}</li>
        <li> Grooming: {breed.grooming}</li>
        <li>Hypoallergenic: {breed.hypoallergenic}</li>
        <li>Barking: {breed.barking}</li>
        <li>Protective: {breed.protectiveRating}</li>
        <li>Sociability: {breed.sociability}</li>
        <li>Friendliness To Other Dogs: {breed.friendlinessToOtherDogs}</li>
        <li>Child Friendly: {breed.childFriendly}</li>
        <li>Independence: {breed.independence}</li>
      </ul>
    </div>
  );
};

export default DetailBreed;
