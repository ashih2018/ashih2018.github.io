import React, { Component } from 'react';
import FunFacts from './FunFacts';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div id='about'>
        <span>
          I am computer science student studying at University of Toronto. My
          hobbies include listening to playing volleyball, listening to music,
          biking, playing board games, solving Rubik's cubes, and others.
        </span>
        <FunFacts></FunFacts>
      </div>
    );
  }
}

export default AboutMe;
