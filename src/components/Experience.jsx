import React, { Component } from 'react';
import ExperienceTab from './ExperienceTab';
import '../styles/Experience.scss';
import 'rc-collapse/assets/index.css';

const jobTitles = ['WatchGuard', 'University of Toronto', 'MITRE'];
const jobShorts = [
  'Full stack developer',
  'Open source software developer',
  'Front end developer',
];
const jobDescriptions = ['asda', 'asfdasdf', 'asfdasdfsf'];
const jobIcons = [
  require('../images/Watchguard.png'),
  require('../images/UofT.png'),
  require('../images/Mitre.png'),
];

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
            <h1 className='title'>My Experience</h1>
          </div>
          {this.getExperience()}
        </div>
      </div>
    );
  }
}

export default Experience;
