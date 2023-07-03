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
      <Link to={"/pawprofiles/edit/" + pawProfile.id}>
        <button className="edit-button">Edit {pawProfile.petName}</button>
      </Link>
        <a><button className="delete-button" onClick={onDelete}>Delete {pawProfile.petName}</button></a>
    </div>
  );
};
export default PawProfileDetail;
