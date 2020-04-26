import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/Slideshow.scss';

const fadeImages = [
  require('../images/Picture1.jpg'),
  require('../images/Picture2.jpg'),
  require('../images/Picture3.jpg'),
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <span className='slide-container'>
      <Fade {...fadeProperties}>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={fadeImages[0]} />
          </div>
          <h2>Me In My Apartment!</h2>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={fadeImages[1]} />
          </div>
          <h2>My Dog Tappi</h2>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={fadeImages[2]} />
          </div>
          <h2>Me And The Bois</h2>
        </div>
      </Fade>
    </span>
  );
};

export default Slideshow;
