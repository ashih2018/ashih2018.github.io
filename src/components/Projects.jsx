import React, { Component } from 'react';
import '../styles/Projects.scss';
import ProjectCard from './ProjectCard.jsx';

const projectTitles = [
  "3D Rubik's Cube",
  'NiMO',
  'MealPrep 4 U',
  'Fitcoin',
  'UofT Course Searcher',
  'Tron',
  'ATM'
];
const projectDescriptions = [
  'asda',
  'asfdasdf',
  'asfdasdfsf',
  'aaa',
  'asfasdf',
  'asfs',
  'aaaaa'
];
const projectImages = [
  require('../images/Rubiks.png'),
  require('../images/Nimo.png'),
  require('../images/MealPrep.png'),
  require('../images/Fitcoin.png'),
  require('../images/UofT2.png'),
  require('../images/Tron.png'),
  require('../images/Tron.png'),
];

class Projects extends Component {
  getProjects() {
    const allProjects = [];
    for (let i = 0; i < projectTitles.length; i++) {
      allProjects.push(
        <ProjectCard
          projectTitle={projectTitles[i]}
          projectDescription={projectDescriptions[i]}
          projectImage={projectImages[i]}
        />
      );
    }
    return allProjects;
  }
  render() {
    return (
      <div id='projects' className='project-wrapper'>
        <h1 className='title'>Projects</h1>
        <div id='experience' className='experience-wrapper'>
          {this.getProjects()}
        </div>
      </div>
    );
  }
}

export default Projects;
