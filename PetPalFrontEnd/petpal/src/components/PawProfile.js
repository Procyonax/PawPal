import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import "./styles.css/PawProfile.css"

const PawProfile = ({ pawProfile, handleDelete }) => {
  if (!pawProfile) {
    return "Loading...";
  }
  const url = "/pawprofiles/" + pawProfile.id;
  return (
    <Fragment>
      <div className="paw-profile-card">
        <div className="paw-profile-card-hover">
          <Link to={url}>
            <img
              src={`../Images/${pawProfile.petImage}`}
              alt={`${pawProfile.petname}`}
              className="paw-profile-img"
            />
            <h2>{pawProfile.petName}</h2>
          </Link>
          <p>D.O.B. : {pawProfile.petDob}</p>
          <p>Vet Name : {pawProfile.vetName}</p>
          <p>Vet Contact : {pawProfile.vetNumber}</p>
          <p>Groomer Name : {pawProfile.groomerName}</p>
          <p>Groomer Contact : {pawProfile.groomerNumber}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default PawProfile;
