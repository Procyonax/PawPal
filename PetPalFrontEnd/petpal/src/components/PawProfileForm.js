import React, { useState } from 'react';

const PawProfileForm = ({breeds, onCreate}) =>{

    const [statePawProfile, setStatePawProfile] = useState({
        petName: "",
        petDob: "",
        breed: null,
        vetName: "",
        vetNumber: "",
        groomerName: "",
        groomerNumber: "",
        petImage: ""

    })

    if(breeds.length === 0){
        return <p>Loading...</p>
    }

    const breedOptions = breeds.map((breed, index) =>{
        return <option key={index} value={index}>{breed.name}</option>
    })

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedPawProfile = {...statePawProfile}
        copiedPawProfile[propertyName] = event.target.value;
        setStatePawProfile(copiedPawProfile)
    }

    const handleBreed = (event) => {
        const index = parseInt(event.target.value);
        const selectedBreed = breeds[index]
        let copiedPawProfile = {...statePawProfile}
        copiedPawProfile['breed'] = selectedBreed
        setStatePawProfile(copiedPawProfile)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(statePawProfile)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Pet Name"
                name="petName"
                onChange={handleChange}
                value={statePawProfile.petName}
                ></input>
                               <input
                type="Date"
                placeholder="Pet DOB"
                name="petDob"
                onChange={handleChange}
                value={statePawProfile.petDob}
                ></input>
                <select name="breed" onChange={handleBreed} defaultValue="select-breed">
                    <option disabled value="select-breed">Select a breed of dog</option>
                    {breedOptions}
                </select>
               <input
                type="text"
                placeholder="Vet Name"
                name="vetName"
                onChange={handleChange}
                value={statePawProfile.vetName}
                ></input>
                <input
                type="text"
                placeholder="Vet Number"
                name="vetNumber"
                onChange={handleChange}
                value={statePawProfile.vetNumber}
                ></input>
               <input
                type="text"
                placeholder="Groomer name"
                name="groomerName"
                onChange={handleChange}
                value={statePawProfile.groomerName}
                ></input>
                               <input
                type="text"
                placeholder="Groomer number"
                name="groomerNumber"
                onChange={handleChange}
                value={statePawProfile.groomerNumber}
                ></input>
                               <input
                type="text"
                placeholder="Pet Image"
                name="petImage"
                onChange={handleChange}
                value={statePawProfile.petImage}
                ></input>
                <button type="submit">Save</button>
            </form>
        </div>


    )
}
export default PawProfileForm;