import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
const DogFact = ({ pawfacts }) => {
  const [randomFact, setRandomFact] = useState("");
  const location = useLocation();

  useEffect(() => {
    getRandomFact();
    // eslint-disable-next-line
  }, [location]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * pawfacts.length);
    setRandomFact(pawfacts[randomIndex].description);
  };

  return <div>{randomFact}</div>;
};

export default DogFact;
