import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./styles.css/Splash.css";

const Splash = () => {
  return (
    <div className="splash-container">
      <div className="welcome-message">
        <img
          className="welcome-img"
          src={`./images/happy_dog_running.jpeg`}
          alt="small happy dog running in a park"
        />
        <h2>Looking for your perfect pooch pal?</h2>
      </div>
      <div className="question-container">
        <h3>We can help...</h3>
        <Link to="/survey">
          <button className="quiz-link">Take our quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;
