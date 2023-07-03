import React from "react";
import { Link } from "react-router-dom";
import "./Survey.css";

const Survey = ({ handleChange, handleSubmit, formData }) => {
  const handlePost = () => {
    handleSubmit();
    // return <Link to="/result"></Link>
  };

  return (
      <div className="survey-container">
        <form onSubmit={handleSubmit}>
          <label>
            On a scale of 1 to 5, how important is it to you that your new dog
            is easily trainable?
            <br />
            <input
              type="range"
              name="trainability"
              value={formData.trainability}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            How concerned are you about potential health issues in your new dog,
            on a scale of 1 to 5?
            <br />
            <input
              type="range"
              name="healthIssues"
              value={formData.healthIssues}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            When it comes to exercise needs, how would you rate your preference
            for your new dog on a scale of 1 to 5?
            <br />
            <input
              type="range"
              name="exerciseNeeded"
              value={formData.exerciseNeeded}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            Considering the size of your new dog, where would you place your
            preference on a scale of 1 to 5?
            <br />
            <select name="size" value={formData.size} onChange={handleChange}>
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Giant">Giant</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            How comfortable are you with a dog that drools, on a scale of 1 to
            5?
            <br />
            <input
              type="range"
              name="drooling"
              value={formData.drooling}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            On a scale of 1 to 5, how much grooming are you willing to undertake
            for your new dog?
            <br />
            <input
              type="range"
              name="grooming"
              value={formData.grooming}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            Are you looking for a hypoallergenic dog? Please rate your
            preference on a scale of 1 to 5.
            <br />
            <input
              type="range"
              name="hypoallergenic"
              value={formData.hypoallergenic}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            How tolerant are you of barking in your new dog, on a scale of 1 to
            5?
            <br />
            <input
              type="range"
              name="barking"
              value={formData.barking}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            Considering your desire for a protective dog, how would you rate
            your preference on a scale of 1 to 5?
            <br />
            <input
              type="range"
              name="protectiveRating"
              value={formData.protectiveRating}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            On a scale of 1 to 5, how important is it to you that your new dog
            is sociable?
            <br />
            <input
              type="range"
              name="sociability"
              value={formData.sociability}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            How friendly would you like your new dog to be towards other dogs,
            on a scale of 1 to 5?
            <br />
            <input
              type="range"
              name="friendlinessToOtherDogs"
              value={formData.friendlinessToOtherDogs}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            When it comes to your new dog's friendliness towards children, where
            would you place your preference on a scale of 1 to 5?
            <br />
            <input
              type="range"
              name="childFriendly"
              value={formData.childFriendly}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <br />
          <label>
            On a scale of 1 to 5, how independent would you like your new dog to
            be?
            <br />
            <input
              type="range"
              name="independence"
              value={formData.independence}
              onChange={handleChange}
              min={1}
              max={5}
            />
          </label>
          <br />
          <Link to="/result">
            <button onClick={handlePost}>Submit</button>
          </Link>
        </form>
      </div>
  );
};

export default Survey;
