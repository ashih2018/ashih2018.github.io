import React, { Component } from 'react';
import Slideshow from './Slideshow';
import '../styles/AboutMe.scss';
import Contact from './Contact';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div id='about'>
        <Slideshow />
        <div>
          <span className='summary'>
            <h1> About Me </h1>I am computer science student studying at
            University of Toronto. My hobbies include listening to playing
            volleyball, listening to music, biking, playing board games, solving
            Rubik's cubes, and others.
          </span>
          <Contact />
        </div>
      </div>
    );
  }
}

export default AboutMe;
