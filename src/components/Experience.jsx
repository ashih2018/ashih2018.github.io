import React, { Component } from 'react';
import ExperienceTab from './ExperienceTab';
import '../styles/Experience.scss';
import 'rc-collapse/assets/index.css';
import { watchguard, uoft, mitre } from '../alltext.json'

const jobTitles = ['WatchGuard', 'University of Toronto', 'MITRE'];
const jobShorts = [
  'full stack software engineering intern',
  'open source software developer',
  'software engineering intern',
];
const jobDescriptions = [watchguard, uoft, mitre];
const jobIcons = [
  require('../images/Watchguard.png'),
  require('../images/UofT.png'),
  require('../images/Mitre.png'),
];
const foo = uoft;

class Experience extends Component {
  getExperience() {
    const allExperiences = [];
    for (let i = 0; i < jobTitles.length; i++) {
      allExperiences.push(
        <ExperienceTab
          jobTitle={jobTitles[i]}
          jobShort={jobShorts[i]}
          jobDescription={jobDescriptions[i]}
          jobIcon={jobIcons[i]}
        />
      );
    }
    return allExperiences;
  }

  render() {
    return (
      <div id='experience' className='experience-wrapper section'>
        <div className='inner-wrapper'>
          <div className='title-wrapper'>
            <h1 className='title'>my experience</h1>
          </div>
          {uoft}
        </div>
      </div>
    );
  }
}

export default Experience;
