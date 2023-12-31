import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Survey from "../components/Survey";
import Resources from "../components/Resources";
import AtoZList from "../components/AtoZList";
import NavBar from "../components/NavBar";
import DetailBreed from "../components/DetailBreed";
import Splash from "../components/Splash";
import Result from "../components/ResultCarousel";
import Footer from "../components/Footer";
import PawProfileList from "../components/PawProfileList";
import PawProfileDetail from "../components/PawProfileDetail";
import PawProfileForm from "../components/PawProfileForm";
import PawProfileEditForm from "../components/PawProfileEditForm";
import Request from "../helpers/request";

const PawPalContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    trainability: "3",
    healthIssues: "3",
    exerciseNeeded: "3",
    size: "",
    drooling: "3",
    grooming: "3",
    hypoallergenic: "3",
    barking: "3",
    protectiveRating: "3",
    sociability: "3",
    friendlinessToOtherDogs: "3",
    childFriendly: "3",
    independence: "3",
  });

  const [nearestMatches, setNearestMatches] = useState([]);
  const [breedState, setBreedState] = useState([]);
  const [reversedArray, setReversedArray] = useState([]);
  const [dogFactsState, setDogFactsState] = useState([]);
  // eslint-disable-next-line
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [pawProfiles, setPawProfiles] = useState([]);

  useEffect(() => {
    getBreedState();
    getDogFactsState();
    getPawProfiles();
  }, []);

  useEffect(() => {
    const getReverseArray = function () {
      reverseArray(nearestMatches);
    };
    getReverseArray();
  }, [nearestMatches]);

  const getPawProfiles = () => {
    const request = new Request();
    request.get("/api/profiles").then((data) => {
      setPawProfiles(data);
    });
  };

  const handleDelete = (id) => {
    const request = new Request();
    const url = "/api/profiles/" + id;
    request.delete(url).then(() => {
      window.location = "/pawprofiles";
    });
  };

  const handlePost = (pawProfile) => {
    const request = new Request();
    request.post("/api/profiles", pawProfile).then(() => {
      window.location = "/pawprofiles";
    });
  };

  const handleUpdate = (pawProfile) => {
    const request = new Request();
    request.Patch("/api/profiles/" + pawProfile.id, pawProfile).then(() => {
      window.location = "/pawprofiles/" + pawProfile.id;
    });
  };

  const PawProfileEditWrapper = () => {
    const { id } = useParams();
    let foundPawProfile = findPawProfileById(id);
    return (
      <PawProfileEditForm
        pawProfile={foundPawProfile}
        breeds={breedState}
        handleUpdate={handleUpdate}
      />
    );
  };

  const PawProfileDetailWrapper = () => {
    // extract the id from the url
    const { id } = useParams();
    let foundPawProfile = findPawProfileById(id);
    return (
      <PawProfileDetail
        pawProfile={foundPawProfile}
        handleDelete={handleDelete}
      />
    );
  };

  const findPawProfileById = (id) => {
    let foundPawProfile = null;
    for (let pawProfile of pawProfiles) {
      if (pawProfile.id === Number(id)) {
        foundPawProfile = pawProfile;
      }
    }
    return foundPawProfile;
  };

  const getBreedState = function () {
    fetch("/api/breeds")
      .then((res) => res.json())
      .then((breeds) => setBreedState(breeds));
  };

  const getDogFactsState = function () {
    fetch("/api/dogfacts")
      .then((res) => res.json())
      .then((pawfacts) => setDogFactsState(pawfacts));
  };

  const updateState = (matches) => {
    setNearestMatches(matches);
  };

  function reverseArray(dogArray) {
    let arraysort = [];
    arraysort = dogArray.reverse();
    setReversedArray(arraysort);
  }

  const handleChange = (e) => {
    let key = e.target.name;
    let data = e.target.value;
    let newFormData = { ...formData };
    newFormData[key] = data;
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    getMatch();
  };

  const onBreedSelect = (selected) => {
    setSelectedBreed(selected);
  };

  function getMatch() {
    matchBreed(formData, breedState);
  }

  function matchBreed(formData, breedDatabase) {
    console.log("formData", formData);
    console.log("breedDB", breedDatabase);
    let closestMatches = [];
    // eslint-disable-next-line
    let bestMatch = null;
    let highestScore = 0;

    for (const breed of breedDatabase) {
      let score = 0;

      // Compare each characteristic and increment the score for each match

      if (formData.healthIssues === Number(breed.healthIssues)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.healthIssues - breed.healthIssues);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.trainability === Number(breed.trainability)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.trainability - breed.trainability);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.exerciseNeeded === Number(breed.exerciseNeeded)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.exerciseNeeded - breed.exerciseNeeded);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.size === breed.size) {
        score++;
      }
      if (formData.drooling === Number(breed.drooling)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.drooling - breed.drooling);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.grooming === Number(breed.grooming)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.grooming - breed.grooming);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.hypoallergenic === Number(breed.hypoallergenic)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.hypoallergenic - breed.hypoallergenic);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.barking === Number(breed.barking)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.barking - breed.barking);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.protectiveRating === Number(breed.protectiveRating)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(
          formData.protectiveRating - breed.protectiveRating
        );
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.sociability === Number(breed.sociability)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.sociability - breed.sociability);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (
        formData.friendlinessToOtherDogs ===
        Number(breed.friendlinessToOtherDogs)
      ) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(
          formData.friendlinessToOtherDogs - breed.friendlinessToOtherDogs
        );
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.childFriendly === Number(breed.childFriendly)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.childFriendly - breed.childFriendly);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }
      if (formData.independence === Number(breed.independence)) {
        score += 3; // Weighted score for exact match
      } else {
        const diff = Math.abs(formData.independence - breed.independence);
        score += 2 / (diff + 1); // Weighted score based on the difference
      }

      // Update the best match if the current breed has a higher score
      if (score > highestScore) {
        highestScore = score;
        // eslint-disable-next-line
        bestMatch = breed;
        closestMatches.push(breed);
      }
    }
    updateState(closestMatches);
  }

  const findBreedById = (idToFind) => {
    let found = null;
    for (let breed of breedState) {
      if (breed.id === Number(idToFind)) {
        found = breed;
      }
    }
    return found;
  };
  const BreedDetailWrapper = () => {
    const { id } = useParams();
    let foundBreed = findBreedById(id);
    return <DetailBreed breed={foundBreed} />;
  };

  return (
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
            element={<Result reversedArray={reversedArray} />}
          />
          <Route
            path="/pawprofiles/:id"
            element={<PawProfileDetailWrapper />}
          />
          {pawProfiles.length > 0 ? (
            <Route
              path="/pawprofiles"
              element={<PawProfileList pawProfiles={pawProfiles} />}
            />
          ) : null}
          <Route
            path="/pawprofiles/new"
            element={
              <PawProfileForm breeds={breedState} onCreate={handlePost} />
            }
          />
          <Route
            path="/pawprofiles/edit/:id"
            element={<PawProfileEditWrapper />}
          />

          <Route path="/resources" element={<Resources />} />
          <Route
            path="/atozlist"
            element={
              <AtoZList breeds={breedState} onBreedSelect={onBreedSelect} />
            }
          />
          <Route path="/detailbreed/:id" element={<BreedDetailWrapper />} />
        </Routes>

        <footer className="footer">
          {dogFactsState.length > 0 ? (
            <Footer pawfacts={dogFactsState} />
          ) : null}
        </footer>
      </Router>
    </div>
  );
};

export default PawPalContainer;
