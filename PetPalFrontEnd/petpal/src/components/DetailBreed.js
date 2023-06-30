import React from 'react';

const DetailBreed = ({breed}) => {
  return (
    <div>
    {/* <img src={`../images/${breed.image}`} style={{ width: "250px" }} alt="dog"/> */}
      <h2>{breed.name}</h2>
    <h3>{breed.description}</h3>
    <p>{breed.trainability}</p>
   <p> {breed.health_issues}</p>
   <p> {breed.exercise_needed}</p>
    <p>{breed.size}</p>
    <p>{breed.drooling}</p>
    <p>{breed.grooming}</p>
    <p>{breed.hypoallergenic}</p>
    <p>{breed.barking}</p>
    <p>{breed.protective_rating}</p>
    <p>{breed.sociability}</p>
    <p>{breed.friendliness_to_other_dogs}</p>
    <p>{breed.child_friendly}</p>
    <p>{breed.independence}</p>
    </div>
  );
};

export default DetailBreed;
