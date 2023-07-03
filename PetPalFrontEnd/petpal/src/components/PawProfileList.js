import React from "react";
import PawProfile from "./PawProfile";
import { Link } from "react-router-dom";

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
        <button>Add Profile</button>
      </Link>
      {pawProfileElements}
    </div>
  );
};
export default PawProfileList;
