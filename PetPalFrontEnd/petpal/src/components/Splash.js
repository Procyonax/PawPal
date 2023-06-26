import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {

    return ( 
        <div>
            <div className="splash-header">

            </div>
            <div className="container-fluid px-3 px-md-5">
                <h2 className="my-3 text-shadow">Are you looking for your perfect pooch pal?</h2>
                <h3 className="my-3 text-shadow">We can help...</h3>
                <Link to="/survey">
                    <button className="btn btn-outline-primary">Take our survey</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Splash;