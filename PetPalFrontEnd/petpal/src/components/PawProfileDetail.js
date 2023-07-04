import React from "react";
import { Link } from "react-router-dom";
import PawProfile from "./PawProfile";
import "./styles.css/PawProfile.css"

const PawProfileDetail = ({ pawProfile, handleDelete }) => {
  if (!pawProfile) {
    return "Loading...";
  }
  const onDelete = () => {
    handleDelete(pawProfile.id);
  };

  return (

    <div className="profile-detail-container">
      <PawProfile pawProfile={pawProfile} />
      <div className="buttons-container">
      <Link to={"/pawprofiles/edit/" + pawProfile.id}>
        <button className="edit-button">Edit</button>
      </Link>
        <a href=""><button className="delete-button" onClick={onDelete}>Delete</button></a>
      </div>
    </div>
  );
};
export default PawProfileDetail;
