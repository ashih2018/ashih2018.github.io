import React, { Component } from 'react';
import ExperienceTab from './ExperienceTab';
import '../styles/Experience.scss';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

class Experience extends Component {
  render() {
    return (
      <div className='experience-wrapper'>
        <div className='inner-wrapper'>
          <h1>My Experience</h1>
          <ExperienceTab></ExperienceTab>
          <ExperienceTab></ExperienceTab>
        </div>
      </div>
    );
  }
}

export default Experience;
