import React from 'react';
import ResultCard from "./ResultCard";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Result.css'
import '../App.css'

const Result = ({ reversedArray }) => {
  const breedItems = reversedArray
    .slice(0, -1)
    .map((breed, index) => <ResultCard key={index} breed={breed} />);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      nextArrow: (
        <div>
         <img src='../images/paws-next.png' className='paw-print-sliders' alt='black paws prints'/>
        </div>
      ),
      prevArrow: (
        <div>
          <img src='../images/paws-prev.png' className='paw-print-sliders' alt='black paws prints'/>
        </div>
      ),
    };

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">Your Matches</h2>
      <div className="carousel-content">
        <div className="carousel-innner-container">
          <Slider {...settings}>
            {breedItems}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Result;
