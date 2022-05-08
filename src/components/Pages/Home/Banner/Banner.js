import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './Banner.css'

import banner from '../../../../assest/Banner/banner.png';
import banner2 from '../../../../assest/Banner/banner1.jpg';
import banner3 from '../../../../assest/Banner/banner2.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Street</h3>
            <p>Street motorcycles are motorcycles designed for being ridden on paved roads. They have smooth tires with tread patterns and engines generally in the 125 cc (7.6 cu in) and over range. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Cruiser</h3>
            <p>Cruisers are styled after American machines from the 1930s to the early 1960s, such as those made by Harley-Davidson, Indian, and Excelsior-Henderson.[1] Harley-Davidsons largely define the cruiser category, and large-displacement V-twin engines are the norm, although other engine configurations and small to medium displacements also exist.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Sport bike</h3>
            <p>
              Sport bikes are road bikes which emphasize top speed, acceleration, braking, handling and grip,[3][5][19][20] typically at the expense of comfort and fuel economy in comparison to other motorcycle types.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;