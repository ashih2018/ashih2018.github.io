import React, { Component } from 'react';
import FunFacts from './FunFacts';
import Slideshow from './Slideshow';
import '../styles/AboutMe.scss';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div id='about'>
        {/* <Slideshow /> */}
        <img src='./alex.jpg' />
        <span className='summary'>
          I am computer science student studying at University of Toronto. My
          hobbies include listening to playing volleyball, listening to music,
          biking, playing board games, solving Rubik's cubes, and others.
        </span>
        <FunFacts />
      </div>
    );
  }
}

export default AboutMe;
