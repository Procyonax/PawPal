import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Survey from '../components/Survey';
import Resources from '../components/Resources';
import AtoZList from '../components/AtoZList';
import NavBar from '../components/NavBar';
import DetailBreed from '../components/DetailBreed';
import Splash from '../components/Splash';

const PawPalContainer = () => {


    return ( 
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Splash/>}/>
                    <Route path="/survey" element={<Survey/>}/>
                    <Route path="/resources" element={<Resources/>}/>
                    <Route path="/atozlist" element={<AtoZList/>}/>
                    <Route path="/detailbreed" element={<DetailBreed/>}/>
                </Routes>
            </Router>
        </div>
     );
}
 
export default PawPalContainer;