import React from 'react';
import { Link } from "react-router-dom";
import './Survey.css'

const Survey = ({ handleChange, handleSubmit, formData }) => {
  const handlePost = () => {
    handleSubmit();
    // return <Link to="/result"></Link>
  };

  return (
    <div>
      <div className='survey-container'>
        <form onSubmit={handleSubmit}>
          <label>
            Trainability:
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
          <label>
            Health Issues:
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
          <label>
            Exercise Needed:
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
          <label>
            Size:
            <select name="size" value={formData.size} onChange={handleChange}>
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Giant">Giant</option>
            </select>
          </label>
          <br />
          <label>
            Drooling:
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
          <label>
            Grooming:
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
          <label>
            Hypoallergenic:
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
          <label>
            Barking:
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
          <label>
            Protective Rating:
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
          <label>
            Sociability:
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
          <label>
            Friendliness to Other Dogs:
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
          <label>
            Child Friendly:
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

          <label>
            Independence:
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
    </div>
  );
};

export default Survey;
