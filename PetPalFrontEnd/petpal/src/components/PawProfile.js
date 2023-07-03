import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PawProfile = ({ pawProfile, handleDelete }) => {
  if (!pawProfile) {
    return "Loading...";
  }
  const url = "/pawprofiles/" + pawProfile.id;
  return (
    <Fragment>
      <p>
        <Link to={url}>
          <img
            src={`../Images/${pawProfile.petImage}`}
            alt={`${pawProfile.petname}`}
            className="carousel-img"
          />
          {pawProfile.petName}
        </Link>
      </p>
      <p>{pawProfile.petDob}</p>
      <p>
        {pawProfile.vetName} {pawProfile.vetNumber}
      </p>
      <p>
        {pawProfile.groomerName} {pawProfile.groomerNumber}
      </p>
    </Fragment>
  );
};

export default PawProfile;
