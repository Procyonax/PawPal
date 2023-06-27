import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Survey from "../components/Survey";
import Resources from "../components/Resources";
import AtoZList from "../components/AtoZList";
import NavBar from "../components/NavBar";
import DetailBreed from "../components/DetailBreed";
import Splash from "../components/Splash";
import Result from "../components/Result";

const PawPalContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    trainability: "",
    healthIssues: "",
    exerciseNeeded: "",
    size: "",
    drooling: "",
    grooming: "",
    hypoallergenic: "",
    barking: "",
    protectiveRating: "",
    sociability: "",
    friendlinessToOtherDogs: "",
    childFriendly: "",
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
      .then((breeds) => setBreedState(breeds));
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
    const nearestMatches = [];
    // nearestMatches.length = 0;

    for (const breed of breedDatabase) {
      let score = 0;

      // Compare each characteristic and increment the score for each match

      if (formData.healthIssues == breed.healthIssues) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.healthIssues - breed.healthIssues);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.trainability == breed.trainability) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.trainability - breed.trainability);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.exerciseNeeded == breed.exerciseNeeded) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.exerciseNeeded - breed.exerciseNeeded);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.size === breed.size) {
        score++;
      }
      if (formData.drooling == breed.drooling) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.drooling - breed.drooling);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.grooming == breed.grooming) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.grooming - breed.grooming);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.hypoallergenic == breed.hypoallergenic) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.hypoallergenic - breed.hypoallergenic);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.barking == breed.barking) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.barking - breed.barking);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.protectiveRating == breed.protectiveRating) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(
          formData.protectiveRating - breed.protectiveRating
        );
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.sociability == breed.sociability) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.sociability - breed.sociability);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.friendlinessToOtherDogs == breed.friendlinessToOtherDogs) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(
          formData.friendlinessToOtherDogs - breed.friendlinessToOtherDogs
        );
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.childFriendly == breed.childFriendly) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.childFriendly - breed.childFriendly);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.independence == breed.independence) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.independence - breed.independence);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }

      // Update the best match if the current breed has a higher score
      if (score > highestScore) {
        highestScore = score;
        bestMatch = breed;
        nearestMatches.push(breed);
      }
    }
    console.log(bestMatch);
    console.log(nearestMatches);
    return bestMatch, nearestMatches;
  }

  matchBreed(formData, breedState);

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
            <Route
              path="/result"
              element={<Result matchBreed={matchBreed} />}
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
