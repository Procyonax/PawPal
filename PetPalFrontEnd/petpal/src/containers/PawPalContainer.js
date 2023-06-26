import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Survey from '../components/Survey';
import Resources from '../components/Resources';
import AtoZList from '../components/AtoZList';
import NavBar from '../components/NavBar';
import DetailBreed from '../components/DetailBreed';
import Splash from '../components/Splash';

const PawPalContainer = () => {

  const [breedData, setBreedData] = useState({
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
    independence: ""
  });

  useEffect(() => {
    getBreedData()
  }, []);

  const getBreedData= () => {
    return breedData;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBreedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(breedData); // Perform desired actions with the form data
  };

  return (
    <><div>
          <Router>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Splash />} />
                  <Route path="/survey" element={<Survey handleChange={handleChange} handleSubmit={handleSubmit} breedData={breedData}/>} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/atozlist" element={<AtoZList />} />
                  <Route path="/detailbreed" element={<DetailBreed />} />
              </Routes>
          </Router>
      </div>
    </>
)}
          
          
          export default PawPalContainer;