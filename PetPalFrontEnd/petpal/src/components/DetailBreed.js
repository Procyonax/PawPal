import React from "react";
import "./DetailBreed.css";
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
      <div className="fancy-border">
      <h2 className="detail-breed-name">{breed.name}</h2>
      <p className="detail-description">{breed.description}</p>
      <h3>
        <img src={PawPrint} aria-hidden alt="paw-print-icon" /> Ratings{" "}
        <img src={PawPrint} aria-hidden alt="paw-print-icon" />
      </h3>
      <ul className="ratings-list">
        <li>How trainable am I: <b>{breed.trainability}</b></li>
        <li>How likely I am to have health issues: <b>{breed.healthIssues}</b></li>
        <li>How much exerciseI need: <b>{breed.exerciseNeeded}</b></li>
        <li>My size: <b>{breed.size}</b></li>
        <li>How much I drool: <b>{breed.drooling}</b></li>
        <li>How much grooming I need: <b>{breed.grooming}</b></li>
        <li>How hypoallergenic I am: <b>{breed.hypoallergenic}</b></li>
        <li>How much I bark: <b>{breed.barking}</b></li>
        <li>How protective I am: <b>{breed.protectiveRating}</b></li>
        <li>How sociable I am: <b>{breed.sociability}</b></li>
        <li>How friendly I am with other dogs: <b>{breed.friendlinessToOtherDogs}</b></li>
        <li>How child friendly I am: <b>{breed.childFriendly}</b></li>
        <li>How independent I am: <b>{breed.independence}</b></li>
      </ul>
      <p className="scaling-message">*1 being not fine with and 5 being very fine with*</p>
    </div>
      </div>
  );
};

export default DetailBreed;
