import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Survey.css"; 
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Survey = ({handleChange, handleSubmit, formData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [breedData, setBreedData] = useState({
    trainability: 3,
    health_issues: 3,
    exercise_needed: 3,
    size: 3,
    drooling: 3,
    grooming: 3,
    hypoallergenic: 3,
    barking: 3,
    protective_rating: 3,
    sociability: 3,
    friendliness_to_other_dogs: 3,
    child_friendly: 3,
    independence: 3
  });

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleSliderChange = (name, value) => {
    setBreedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePost = () => {
    handleSubmit();
  };

  const slides = [
    {
      name: "trainability",
      label: "Trainability",
      value: breedData.trainability,
    },
    {
      name: "health_issues",
      label: "Health Issues",
      value: breedData.health_issues,
    },
    {
      name: "exercise_needed",
      label: "Exercise Needed",
      value: breedData.exercise_needed,
    },
    {
      name: "size",
      label: "Size",
      value: breedData.size,
    },
    {
      name: "drooling",
      label: "Drooling",
      value: breedData.drooling,
    },
    {
      name: "grooming",
      label: "Grooming",
      value: breedData.grooming,
    },
    {
      name: "hypoallergenic",
      label: "Hypoallergenic",
      value: breedData.hypoallergenic,
    },
    {
      name: "barking",
      label: "Barking",
      value: breedData.barking,
    },
    {
      name: "protective_rating",
      label: "Protective Rating",
      value: breedData.protective_rating,
    },
    {
      name: "sociability",
      label: "Sociability",
      value: breedData.sociability,
    },
    {
      name: "friendliness_to_other_dogs",
      label: "Friendliness to Other Dogs",
      value: breedData.friendliness_to_other_dogs,
    },
    {
      name: "child_friendly",
      label: "Child Friendly",
      value: breedData.child_friendly,
    },
    {
      name: "independence",
      label: "Independence",
      value: breedData.independence,
    },
  ];

  const currentSlideData = slides[currentSlide];
  const isFinalSlide = currentSlide === slides.length - 1;

  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{currentSlideData.label}: {currentSlideData.value}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={currentSlideData.value}
            onChange={(e) =>
              handleSliderChange(currentSlideData.name, parseInt(e.target.value))
            }
          />
        </div>
        <Link to="/result">
            <button onClick={handlePost}>Submit</button>
          </Link>
        <div>
          {currentSlide > 0 && (
            <button onClick={handlePrevious}>Previous</button>
          )}
          {isFinalSlide ? (
            <Link to="/result">
            <button onClick={handlePost}>Submit</button>
          </Link>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </form>
    </div>
  );
};


export default Survey;
