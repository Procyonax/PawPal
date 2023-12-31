import React, { useState } from "react";
import "./styles.css/PawProfileForm.css";

const PawProfileForm = ({ breeds, onCreate }) => {
  const [statePawProfile, setStatePawProfile] = useState({
    petName: "",
    petDob: "",
    breed: null,
    vetName: "",
    vetNumber: "",
    groomerName: "",
    groomerNumber: "",
    petImage: "",
  });

  if (breeds.length === 0) {
    return <p>Loading...</p>;
  }

  const breedOptions = breeds.map((breed, index) => {
    return (
      <option key={index} value={index}>
        {breed.name}
      </option>
    );
  });

  const handleChange = (event) => {
    let propertyName = event.target.name;
    let copiedPawProfile = { ...statePawProfile };
    copiedPawProfile[propertyName] = event.target.value;
    setStatePawProfile(copiedPawProfile);
  };

  const handleBreed = (event) => {
    const index = Number(event.target.value);
    const selectedBreed = breeds[index];
    let copiedPawProfile = { ...statePawProfile };
    copiedPawProfile["breed"] = selectedBreed;
    setStatePawProfile(copiedPawProfile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(statePawProfile);
  };

  return (
    <div className="new-profile-form-container">
      <form onSubmit={handleSubmit}>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Pet Name"
            name="petName"
            onChange={handleChange}
            value={statePawProfile.petName}
            required
          ></input>
        </p>
        <p>
          <input
            className="input"
            type="Date"
            placeholder="Pet DOB"
            name="petDob"
            onChange={handleChange}
            value={statePawProfile.petDob}
          ></input>
        </p>
        <p>
          <select
            className="input"
            name="breed"
            onChange={handleBreed}
            defaultValue="select-breed"
          >
            <option disabled value="select-breed">
              Select a breed of dog
            </option>
            {breedOptions}
          </select>
        </p>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Vet Name"
            name="vetName"
            onChange={handleChange}
            value={statePawProfile.vetName}
          ></input>
        </p>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Vet Number"
            name="vetNumber"
            onChange={handleChange}
            value={statePawProfile.vetNumber}
          ></input>
        </p>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Groomer name"
            name="groomerName"
            onChange={handleChange}
            value={statePawProfile.groomerName}
          ></input>
        </p>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Groomer number"
            name="groomerNumber"
            onChange={handleChange}
            value={statePawProfile.groomerNumber}
          ></input>
        </p>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Pet Image"
            name="petImage"
            onChange={handleChange}
            value={statePawProfile.petImage}
          ></input>
        </p>
        <button className="save-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
export default PawProfileForm;
