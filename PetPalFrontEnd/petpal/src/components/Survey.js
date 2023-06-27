const Survey = ({ handleChange, handleSubmit, formData }) => {
  return (
    <>
      <div>
        <h1>Breed Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Trainability:
            <input
              type="number"
              name="trainability"
              value={formData.trainability}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Health Issues:
            <input
              type="number"
              name="health_issues"
              value={formData.health_issues}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Exercise Needed:
            <input
              type="number"
              name="exercise_needed"
              value={formData.exercise_needed}
              onChange={handleChange}
              min={0}
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
              type="number"
              name="drooling"
              value={formData.drooling}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Grooming:
            <input
              type="number"
              name="grooming"
              value={formData.grooming}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Hypoallergenic:
            <input
              type="number"
              name="hypoallergenic"
              value={formData.hypoallergenic}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Barking:
            <input
              type="number"
              name="barking"
              value={formData.barking}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Protective Rating:
            <input
              type="number"
              name="protective_rating"
              value={formData.protective_rating}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Sociability:
            <input
              type="number"
              name="sociability"
              value={formData.sociability}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Friendliness to Other Dogs:
            <input
              type="number"
              name="friendliness_to_other_dogs"
              value={formData.friendliness_to_other_dogs}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <label>
            Child Friendly:
            <input
              type="number"
              name="child_friendly"
              value={formData.child_friendly}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />

          <label>
            Independence:
            <input
              type="number"
              name="independence"
              value={formData.independence}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Survey;
