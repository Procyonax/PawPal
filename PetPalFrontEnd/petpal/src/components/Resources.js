import React from "react";
import "./Resources.css";
import PawPrint from "../icons/pawprint.svg";

const Resources = () => {
  return (
    <div>
      <div className="resources">
        <h2>
          <img src={PawPrint} aria-hidden alt="paw-print-icon" />
          Find your perfect pooch
          <img src={PawPrint} aria-hidden alt="paw-print-icon" />
        </h2>
        <h3>
          <a
            href="https://www.dogstrust.org.uk/"
            target="_blank"
            
          >
            <img className="logos-larger" src="../images/dogs_trust_logo.jpg" alt="{dogs_trust_logo}"/>
          </a>
        </h3>
        <p>
          When a dog is in distress, we care for them. When a dog needs a home,
          we find them a loving family. When an owner needs a helping hand (or
          paw) or they just can`t cope, we`re ready to step in.{" "}
        </p>
        <h3>
          <a
            href="https://www.battersea.org.uk/"
            target="_blank"
            alt="{battersea_dog_and_cat_home_logo}"
          >
            <img className="logos-larger" src="../images/battersea_logo.jpg" aria-hidden alt="battersea-logo"/>
          </a>
        </h3>
        <p>
          At Battersea, we take in every animal who needs us. We give each one
          lots of love and expert care and get to know their characters and
          quirks so we can find them a new home that`s just right for them.
        </p>
        <h3>
          <a href="https://www.scottishspca.org/" target="_blank">
            <img
              className="logo-sspca"
              src="../images/spca_logo.jpg"
              alt="{sspca_logo}"
            />
          </a>
        </h3>
        <p>
          As Scotland's animal welfare charity, we've been on-hand to protect
          animals and prevent cruelty for 180 years. Over almost two centuries,
          we've grown to become a national charity which celebrates the strength
          of the human-animal bond and enriches the lives of animals and people.
          We are Scotland's animal champions.
        </p>
        <h3>
          <a href="https://www.rspca.org.uk/home" target="_blank">
            <img
              className="logos"
              src="../images/rspca_logo.jpg"
              alt="{rspca_logo}"
            />
          </a>
        </h3>
        <p>
          Every year thousands of animals suffer from neglect, cruelty and
          abuse. With your help, we can end their misery. We rely on voluntary
          fundraising and donations to carry out our vital work.
        </p>
        <h3>
          <a href="https://www.bluecross.org.uk/" target="_blank">
            <img
              className="logos"
              src="../images/blue_cross_logo.jpg"
              alt="{blue_cross_logo}"
            />
          </a>
        </h3>
        <p>
          We find happy homes for sick, injured and homeless pets. We keep pets
          healthy by promoting responsible pet ownership and providing
          veterinary care to owners who can`t afford private veterinary fees.
        </p>
      </div>
      <div div className="resources">
        <h2>
          <img src={PawPrint} aria-hidden alt="paw-print-icon" />
          Find a vet near you
          <img src={PawPrint} aria-hidden alt="paw-print-icon" />
        </h2>
        <h3>
          <a
            href="https://findavet.rcvs.org.uk/home/?&&type=rfst&set=true#cookie-widget"
            target="_blank"
          >
            <img
              className="logos-larger"
              src="../images/rcvs_logo.jpg"
              alt="{royal_college_of_veterinary_surgeons_logo}"
            />
          </a>
        </h3>
        <p>
          Welcome to our Find a Vet service ~ the most comprehensive information
          available about veterinary practices in the UK, the services they
          offer and the facilities they provide. You can also use this service
          to search for veterinary surgeons and veterinary nurses, and to check
          their registration status.
        </p>
      </div>
      <div div className="resources">
        <h2>
          <img src={PawPrint} aria-hidden alt="paw-print-icon" />
          Pet Sitters for when you are away
          <img src={PawPrint} aria-hidden alt="paw-print-icon" />
        </h2>
        <h3>
          <a href="https://www.rover.com/" target="_blank">
            <img
              className="logos"
              src="../images/rover_logo.jpg"
              alt="{rover_logo}"
            />
          </a>
        </h3>
        <p>
          Book trusted sitters and dog walkers. Meet local sitters who will
          treat your pets like family.
        </p>
        <h3>
          <a href="https://www.trustedhousesitters.com/" target="_blank">
            <img
              className="logos"
              src="../images/trusted_house_sitters_logo.jpg"
              alt="{trusted_house_sitters_logo}"
            />
          </a>
        </h3>
        <p>
          Find a verified and reviewed sitter who`ll keep your pets company and
          give them all the time, care and attention in the world.
        </p>
      </div>
    </div>
  );
};

export default Resources;

