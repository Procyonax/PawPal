import React, {useState} from 'react';

const PawProfileEditForm = ({pawProfile, breeds, handleUpdate}) => {


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
        let updatedStatePawProfile = {...statePawProfile}
        updatedStatePawProfile["id"] = pawProfile.id
        handleUpdate(updatedStatePawProfile)
      };

      const findBreedIndex = () => {
        return breeds.findIndex((breed) => {
            return pawProfile.breed.id === breed.id
        })
      }
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                placeholder={pawProfile.petName}
                name="petName"
                onChange={handleChange}
                value={statePawProfile.petName}
              ></input>
            </p>
            <p>
              <input
                type="Date"
                placeholder={pawProfile.petDob}
                name="petDob"
                onChange={handleChange}
                value={statePawProfile.petDob}
              ></input>
            </p>
            <p>
              <select
                name="breed"
                onChange={handleBreed}
                defaultValue={findBreedIndex()}>
                {breedOptions}
              </select>
            </p>
            <p>
              <input
                type="text"
                placeholder={pawProfile.vetName}
                name="vetName"
                onChange={handleChange}
                value={statePawProfile.vetName}
              ></input>
            </p>
            <p>
              <input
                type="text"
                placeholder={pawProfile.vetNumber}
                name="vetNumber"
                onChange={handleChange}
                value={statePawProfile.vetNumber}
              ></input>
            </p>
            <p>
              <input
                type="text"
                placeholder={pawProfile.groomerName}
                name="groomerName"
                onChange={handleChange}
                value={statePawProfile.groomerName}
              ></input>
            </p>
            <p>
              <input
                type="text"
                placeholder={pawProfile.groomerNumber}
                name="groomerNumber"
                onChange={handleChange}
                value={statePawProfile.groomerNumber}
              ></input>
            </p>
            <p>
              <input
                type="text"
                placeholder={pawProfile.petImage}
                name="petImage"
                onChange={handleChange}
                value={statePawProfile.petImage}
              ></input>
            </p>
            <button type="submit">Save</button>
          </form>
        </div>
      );


}

export default PawProfileEditForm;