import React from 'react';


const AtoZList = ({breeds}) => {
  console.log(breeds);
  const dogBreedItems = breeds.sort((a,b) => a.name.localeCompare(b.name)).map((breed, index) => {
    // This should be a component of it's own called BreedCard
    return (<div> 
      {/* No image for poodle but it's on the database */}
      <img src={`../images/${breed.image}`} style={{ width: "250px" }} alt="dog" />
      <h2>{breed.name}</h2>

    </div>
      )
  })

  return (
    <>
    <h1>AtoZ of Dugs</h1>
    {dogBreedItems}
    </>
  )
};

export default AtoZList;
