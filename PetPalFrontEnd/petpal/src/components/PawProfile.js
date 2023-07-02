import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const PawProfile = ({pawProfile, handleDelete}) => {

    if (!pawProfile){
        return "Loading..."
    }
    const url = "/profiles/" + pawProfile.id;
    return(
        <Fragment>
            <p>
                <Link to= {url}>
                    {pawProfile.petName} 
                </Link>
            </p>
            <p>{pawProfile.petDob}</p>
            <p>{pawProfile.vetName}</p>

        </Fragment>
    )
}

export default PawProfile;