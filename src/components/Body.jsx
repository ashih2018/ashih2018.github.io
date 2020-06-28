import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import '../styles/Body.scss';

class Body extends Component {
  state = {};
  render() {
    return (
      <div className='body'>
        <div className='body-wrapper'>
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
        </div>
      </div>
    );
  }
}

export default Body;
