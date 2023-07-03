import React from "react";
import PawProfile from "./PawProfile";

const PawProfileDetail = ({ pawProfile, handleDelete }) => {
  if (!pawProfile) {
    return "Loading...";
  }
  const onDelete = () => {
    handleDelete(pawProfile.id);
  };

  return (
    <div>
      <PawProfile pawProfile={pawProfile} />
      <button onClick={onDelete}>Delete {pawProfile.petName}</button>
    </div>
  );
};
export default PawProfileDetail;
