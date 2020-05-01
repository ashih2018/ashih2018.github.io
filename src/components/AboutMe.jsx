import React, { Component } from 'react';
import '../styles/AboutMe.scss';
import Contact from './Contact';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div id='about'>
        <span className='slide-container'>
          <div className='image-container'>
            <img className='image' src={require('../images/Picture1.jpg')} alt='Picture of me in my apartment!' />
          </div>
        </span>

        <span className='right-wrapper'>
          <div className='summary'>
            <h1> About Me </h1>I am computer science student studying at
            University of Toronto. My hobbies include listening to playing
            volleyball, listening to music, biking, playing board games, solving
            Rubik's cubes, and others.
            <Contact />
          </div>
        </span>
      </div>
    );
  }
}

export default AboutMe;
