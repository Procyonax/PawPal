import React from 'react';
import './Footer.css'; 
import DogFact from './DogFact';

const Footer = ({pawfacts}) => {
  return (
      <div className='footer'>
      <p><DogFact pawfacts={pawfacts}/></p>
      <hr></hr>
      © Tom Gibbons, Scott Hynd, Beth Lupton, Gregor Ross
      </div>
  );
};

export default Footer;
