import React from 'react';
import { Link } from 'react-router-dom';
import PawProfile from './PawProfile';

const PawProfileDetail = ({pawProfile, handleDelete}) => {

    if(!pawProfile){
        return "Loading..."
    }
    const onDelete=() =>{
        handleDelete(pawProfile.id)
    }

    return(
        <div>
            <PawProfile pawProfile={pawProfile} />
        </div>
    )
}
export default PawProfileDetail;