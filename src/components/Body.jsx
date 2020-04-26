import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import '../styles/Body.scss';

class Body extends Component {
  state = {};
  render() {
    return (
      <div className='body-wrapper'>
        <AboutMe />
        <Experience />
      </div>
    );
  }
}

export default Body;
