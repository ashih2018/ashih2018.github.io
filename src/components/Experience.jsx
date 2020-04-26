import React, { Component } from 'react';
import ExperienceTab from './ExperienceTab';
import '../styles/Experience.scss';

class Experience extends Component {
  state = {};
  render() {
    return (
      <div className='experience-wrapper'>
        <h1>My Experience</h1>
        <ExperienceTab> </ExperienceTab>
        <ExperienceTab> </ExperienceTab>
      </div>
    );
  }
}

export default Experience;
