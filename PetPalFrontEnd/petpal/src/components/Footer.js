import React from "react";
import "./styles.css/Footer.css";
import DogFact from "./DogFact";

const Footer = ({ pawfacts }) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <DogFact pawfacts={pawfacts} />
        <hr></hr>© Tom Gibbons, Scott Hynd, Beth Lupton, Gregor Ross
      </footer>
    </div>
  );
};

export default Footer;
