// import React from 'react';


// const AtoZList = ({breeds}) => {
//   console.log(breeds);
//   const dogBreedItems = breeds.sort((a,b) => a.name.localeCompare(b.name)).map((breed, index) => {
//     // This should be a component of it's own called BreedCard
//     return (<div> 
//       {/* No image for poodle but it's on the database */}
//       <img src={`../images/${breed.image}`} style={{ width: "250px" }} alt="dog" />
//       <h2>{breed.name}</h2>

//     </div>
//       )
//   })

//   return (
//     <>
//     <h1>AtoZ of Dugs</h1>
//     {dogBreedItems}
//     </>
//   )
// };

// export default AtoZList;

import React, { useState } from "react";

const AtoZList = ({ breeds }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dogBreedItems = breeds.sort((a, b) => a.name.localeCompare(b.name)).filter(
    (breed) =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>AtoZ of Dogs</h1>
      <input
        type="text"
        placeholder="Search for a dog breed"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <ul>
        {dogBreedItems.map((breed, index) => (
          <li key={index}>
            <img src={`../images/${breed.image}`} style={{ width: "250px" }} alt="dog" />
            <h2>{breed.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AtoZList;
