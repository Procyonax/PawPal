import React from "react";
import PawProfile from "./PawProfile";
import { Link } from "react-router-dom";
import "../App.css"
import "./styles.css/PawProfile.css"

const PawProfileList = ({ pawProfiles }) => {
  const pawProfileElements = pawProfiles.map((pawProfile, index) => {
    return (
      <div>
        <li key={index}>
          <div>
            <PawProfile pawProfile={pawProfile} />
          </div>
        </li>
      </div>
    );
  });
  return (
    <div>
      <Link to="/pawprofiles/new">
        <button className="add-profile-button">+ Profile</button>
      </Link>
      <div className="paw-profile-card-container">
      {pawProfileElements}
      </div>
    </div>
  );
};
export default PawProfileList;
