import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Survey from "../components/Survey";
import Resources from "../components/Resources";
import AtoZList from "../components/AtoZList";
import NavBar from "../components/NavBar";
import DetailBreed from "../components/DetailBreed";
import Splash from "../components/Splash";

const PawPalContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    trainability: "",
    health_issues: "",
    exercise_needed: "",
    size: "",
    drooling: "",
    grooming: "",
    hypoallergenic: "",
    barking: "",
    protective_rating: "",
    sociability: "",
    friendliness_to_other_dogs: "",
    child_friendly: "",
    independence: "",
  });

  const [breedState, setBreedState] = useState([]);

  useEffect(() => {
    getBreedState();
  }, []);

  const getBreedState = function () {
    let breeds = [];
    fetch("/api/breeds")
      .then((res) => res.json())
      .then((breeds) => setBreedState(breeds))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Perform desired actions with the form data
  };

  function matchBreed(formData, breedDatabase) {
    let bestMatch = null;
    let highestScore = 0;

    for (const breed of breedDatabase) {
      let score = 0;

      // Compare each characteristic and increment the score for each match
      if (formData.trainability == breed.trainability) {
        score++;
      }
      if (formData.health_issues == breed.health_issues) {
        score++;
      }
      if (formData.exercise_needed == breed.exercise_needed) {
        score++;
      }
      if (formData.size === breed.size) {
        score++;
      }
      if (formData.drooling == breed.drooling) {
        score++;
      }
      if (formData.grooming == breed.grooming) {
        score++;
      }
      if (formData.hypoallergenic == breed.hypoallergenic) {
        score++;
      }
      if (formData.barking == breed.barking) {
        score++;
      }
      if (formData.protective_rating == breed.protective_rating) {
        score++;
      }
      if (formData.sociability == breed.sociability) {
        score++;
      }
      if (
        formData.friendliness_to_other_dogs == breed.friendliness_to_other_dogs
      ) {
        score++;
      }
      if (formData.child_friendly == breed.child_friendly) {
        score++;
      }
      if (formData.independence == breed.independence) {
        score++;
      }

      // Update the best match if the current breed has a higher score
      if (score > highestScore) {
        highestScore = score;
        console.log(breed);
        bestMatch = breed;
      }
    }
    console.log(bestMatch);
    return bestMatch;
    // console.log(bestMatch)
  }

  matchBreed(formData, breedState)
  

  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route
              path="/survey"
              element={
                <Survey
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  formData={formData}
                />
              }
            />
            <Route path="/resources" element={<Resources />} />
            <Route path="/atozlist" element={<AtoZList />} />
            <Route path="/detailbreed" element={<DetailBreed />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default PawPalContainer;
