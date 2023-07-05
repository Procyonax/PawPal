import React from "react";
import { Link } from "react-router-dom";
import "./styles.css/Survey.css";

const Survey = ({ handleChange, handleSubmit, formData }) => {
  const handlePost = () => {
    handleSubmit();
  };

  return (
    <div className="survey-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          How trainable would you like your dog to be?
          <br />
          <input className="slider"
            type="range"
            name="trainability"
            value={formData.trainability}
            onChange={handleChange}
            min={1}
            max={5}
            list="trainability-values"
          />
        </label>
        <datalist id="trainabilty-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>
        <div className="range-container">
          <p>easily</p>
          <p>challenging</p>
        </div>
        <br />
        <label>
          Would you be open to owning a dog from a breed that has known potential health issues?  
          <br />
          <input
            type="range"
            name="healthIssues"
            value={formData.healthIssues}
            onChange={handleChange}
            min={1}
            max={5}
            list="health-values"
          />
        </label>
        <datalist id="health-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>  
        <div className="range-container">
          <p>not open</p>
          <p>very open</p>
        </div>      
        <br />
        <label>
          When it comes to exercise needs, how would you rate your preference
          for your new dog?
          <br />
          <input
            type="range"
            name="exerciseNeeded"
            value={formData.exerciseNeeded}
            onChange={handleChange}
            min={1}
            max={5}
            list="exercise-values"
          />
        </label>
        <datalist id="exercise-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>  
        <div className="range-container">
          <p>little</p>
          <p>lots</p>
        </div>  
        <br />
        <label>
          What size of dog would you  be comfortable with?
          <br />
          <select className="size-dropdown" name="size" value={formData.size} onChange={handleChange}>
            <option value="">Select size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Giant">Giant</option>
          </select>
        </label>
        <br />
        <br/>
        <label>
          How comfortable are you with a dog that drools?
          <br />
          <input
            type="range"
            name="drooling"
            value={formData.drooling}
            onChange={handleChange}
            min={1}
            max={5}
            list="drooling-values"
          />
        </label>
        <datalist id="drooling-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>  
        <div className="range-container">
          <p>uncomfortable</p>
          <p>comfortable</p>
        </div>  
        <br />
        <label>
          How much grooming are you willing to undertake
          for your new dog?
          <br />
          <input
            type="range"
            name="grooming"
            value={formData.grooming}
            onChange={handleChange}
            min={1}
            max={5}
            list="grooming-values"
          />
        </label>
        <datalist id="grooming-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>  
        <div className="range-container">
          <p>little</p>
          <p>lots</p>
        </div>         
         <br />
        <label>
          How hypoallergenic would you need the dog to be?
          <br />
          <input
            type="range"
            name="hypoallergenic"
            value={formData.hypoallergenic}
            onChange={handleChange}
            min={1}
            max={5}
            list="hypoallergenic-values"
          />
        </label>
        <datalist id="hypoallergenic-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>  
        <div className="range-container">
          <p>not</p>
          <p>very</p>
        </div>          
        <br />
        <label>
          How much do you mind your dog barking?
          <br />
          <input
            type="range"
            name="barking"
            value={formData.barking}
            onChange={handleChange}
            min={1}
            max={5}
            list="barking-values"
          />
          <datalist id="barking-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>
        <div className="range-container">
          <p>little</p>
          <p>lots</p>
        </div>
        </label>
        <br />
        <label>
          How protective would you like your dog to be?
          <br />
          <input
            type="range"
            name="protectiveRating"
            value={formData.protectiveRating}
            onChange={handleChange}
            min={1}
            max={5}
            list="protective-values"
            
          />
          <datalist id="protective-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>
        <div className="range-container">
          <p>not at all</p>
          <p>extremely</p>
        </div>
        </label>
        <br />
        <label>
          How sociable do you need your dog to be?
          <br />
          <input
            type="range"
            name="sociability"
            value={formData.sociability}
            onChange={handleChange}
            min={1}
            max={5}
            list="sociability-values"
          />
          <datalist id="sociability-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>
        <div className="range-container">
          <p>unnecessary</p>
          <p>very necessary</p>
        </div>
        </label>
        <br />
        <label>
          How important is it that your dog gets on with other dogs?
          <br />
          <input
            type="range"
            name="friendlinessToOtherDogs"
            value={formData.friendlinessToOtherDogs}
            onChange={handleChange}
            min={1}
            max={5}
            list="friendliness-to-other-dogs-values"
          />
          <datalist id="friendliness-to-other-dogs-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>
        <div className="range-container">
        <p>unnecessary</p>
        <p>very necessary</p>
        </div>
        </label>
        <br />
        <label>
          How necessary is it for the dog to get on with children?
          <br />
          <input
            type="range"
            name="childFriendly"
            value={formData.childFriendly}
            onChange={handleChange}
            min={1}
            max={5}
            list="child-friendly-values"
          />
        </label>
        <datalist id="child-friendly-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>
        <div className="range-container">
          <p>unnecessary</p>
          <p>very</p>
        </div>
        <br />
        <label>
          How independent would you like your dog to be?
          <br />
          <input
            type="range"
            name="independence"
            value={formData.independence}
            onChange={handleChange}
            min={1}
            max={5}
            list="independence-values"
          />
        </label>
        <datalist id="independence-values">
          <div className="options-container">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          </div>
        </datalist>
        <div className="range-container">
          <p>dependent</p>
          <p>independent</p>
        </div>
        <br />
        <Link to="/result">
          <button className="submit-button" onClick={handlePost}>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Survey;
