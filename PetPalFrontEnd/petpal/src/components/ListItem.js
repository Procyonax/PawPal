import React from "react";

const ListItem = ({ breed }) => {
  return (
    <>
      <img
        src={require("../images/" + breed.image)}
        style={{ width: "250px" }}
      />
    
      <h2>{breed.name}</h2>
    </>
  );
};

export default ListItem;
