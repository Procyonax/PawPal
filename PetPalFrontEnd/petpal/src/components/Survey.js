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
      label: "On a scale of 1 to 5, how important is it to you that your new dog is easily trainable?",
      value: breedData.trainability,
    },
    {
      name: "health_issues",
      label: "How concerned are you about potential health issues in your new dog, on a scale of 1 to 5?",
      value: breedData.health_issues,
    },
    {
      name: "exercise_needed",
      label: "When it comes to exercise needs, how would you rate your preference for your new dog on a scale of 1 to 5?",
      value: breedData.exercise_needed,
    },
    {
      name: "size",
      label: "Considering the size of your new dog, where would you place your preference on a scale of 1 to 5?",
      value: breedData.size,
    },
    {
      name: "drooling",
      label: "How comfortable are you with a dog that drools, on a scale of 1 to 5?",
      value: breedData.drooling,
    },
    {
      name: "grooming",
      label: "On a scale of 1 to 5, how much grooming are you willing to undertake for your new dog?",
      value: breedData.grooming,
    },
    {
      name: "hypoallergenic",
      label: "Are you looking for a hypoallergenic dog? Please rate your preference on a scale of 1 to 5.",
      value: breedData.hypoallergenic,
    },
    {
      name: "barking",
      label: "How tolerant are you of barking in your new dog, on a scale of 1 to 5?",
      value: breedData.barking,
    },
    {
      name: "protective_rating",
      label: "Considering your desire for a protective dog, how would you rate your preference on a scale of 1 to 5?",
      value: breedData.protective_rating,
    },
    {
      name: "sociability",
      label: "On a scale of 1 to 5, how important is it to you that your new dog is sociable?",
      value: breedData.sociability,
    },
    {
      name: "friendliness_to_other_dogs",
      label: "How friendly would you like your new dog to be towards other dogs, on a scale of 1 to 5?",
      value: breedData.friendliness_to_other_dogs,
    },
    {
      name: "child_friendly",
      label: "When it comes to your new dog's friendliness towards children, where would you place your preference on a scale of 1 to 5?",
      value: breedData.child_friendly,
    },
    {
      name: "independence",
      label: "On a scale of 1 to 5, how independent would you like your new dog to be?",
      value: breedData.independence,
    },
  ];

  const currentSlideData = slides[currentSlide];
  const isFinalSlide = currentSlide === slides.length - 1;

  return (
    <div className='survey-container'>
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
