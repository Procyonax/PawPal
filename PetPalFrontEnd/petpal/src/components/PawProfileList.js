import React from 'react';
import PawProfile from './PawProfile';

const PawProfileList = ({pawProfiles}) =>{

    const pawProfileElements = pawProfiles.map((pawProfile, index) =>{
        return(
            <li key={index}>
                <div>
                    <PawProfile pawProfile={pawProfile} />
                </div>
            </li>
        )
    }) 
    return (
        <div>
            {pawProfileElements}
        </div>
    )
}
export default PawProfileList;