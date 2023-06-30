import React, { useEffect, useState } from 'react';
const DogFact = ({pawfacts}) => {

    const [randomFact, setRandomFact] = useState('')

useEffect(() => {
    getRandomFact()
},[]);

const getRandomFact =() =>{
    const randomIndex = Math.floor(Math.random() * pawfacts.length);
    setRandomFact(pawfacts[randomIndex].description);
};

// console.log("test", randomFact);

return (

    <div>
    <p>{randomFact}</p>
    </div>
)

}

export default DogFact;