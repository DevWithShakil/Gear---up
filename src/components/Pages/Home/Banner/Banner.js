import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';

import banner from '../../../../assest/Banner/banner.png';
import banner2 from '../../../../assest/Banner/banner2.jpg';
import banner3 from '../../../../assest/Banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState  (0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <div>
           <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Julia and Gil</h3>
          <p>RyuCreative is a boutique style marketing agency in Los Angeles. The female ran company has successfully assisted several different companies in PR, Social Branding and Creative Design.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Phil Chester</h3>
          <p>Scott’s photography is clean cut and top of the line in quality. He works with brands in creative development, branding and using his stunning images to reflect each project.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lalu Photo</h3>
          <p>
            Levon Biss is a photographer in London. He has some authentic and gorgeous work with people, soccer and insects. His photos of insects are made using Microsculpture which turns out to be a mind-blowing image of the insect!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;