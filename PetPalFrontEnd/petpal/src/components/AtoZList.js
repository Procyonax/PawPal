import React, { useState } from "react";
import {Link} from "react-router-dom"
import BreedCard from "./BreedCard";

const AtoZList = ({ breeds }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dogBreedItems = breeds
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((breed) =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const dogBreedListItems = dogBreedItems.map((breed, index) => {
      return <p key={index}><BreedCard breed={breed}/></p>
    })




  return (
    <div>
      <h1>AtoZ of Dogs</h1>
      <input
        type="text"
        placeholder="Search for a dog breed"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <p>
        {dogBreedListItems}
      </p>
    </div>
  );
};

export default AtoZList;
