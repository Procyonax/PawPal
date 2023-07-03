import React, { useState } from "react";
import BreedCard from "./BreedCard";
import "./AtoZList.css";
import PawPrint from "../icons/pawprint.svg";

const AtoZList = ({ breeds }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dogBreedItems = breeds
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((breed) =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const dogBreedListItems = dogBreedItems.map((breed, index) => {
    return (
      <div className="atoz-list-breed" key={index}>
        <BreedCard breed={breed} />
      </div>
    );
  });

  return (
    <div>
      <h1>
        <img src={PawPrint} aria-hidden alt="paw-print-icon" />
        AtoZ of Dogs
        <img src={PawPrint} aria-hidden alt="paw-print-icon" />
      </h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a dog breed"
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div className="atoz-list">{dogBreedListItems}</div>
    </div>
  );
};

export default AtoZList;
