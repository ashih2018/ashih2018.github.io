import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import '../styles/Body.scss';
import Projects from './Projects';

class Body extends Component {
  state = {};
  render() {
    return (
      <div className='body'>
        <div className='body-wrapper'>
          <AboutMe />
          <Experience />
          <Projects />
        </div>
      </div>
    );
  }
}

export default Body;
