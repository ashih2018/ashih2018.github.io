import React, { Component } from 'react';
import '../styles/Projects.scss';
import ProjectCard from './ProjectCard.jsx';

const projectTitles = [
  "3D Rubik's Cube",
  'NiMO',
  'MealPrep 4 U',
  'Fitcoin',
  'UofT Course Finder',
  'ATM',
  'Tron',
];
const projectDescriptions = [
  "3D interactive Rubik's Cube written with Pygame and OpenGL.",
  "UofT VII Hacks Winner \n Application designed to simplify bank payments in a person's life.",
  'A website hosted with Flask which helps users make healthy eating choices with the Google Cloud Vision AI library.',
  'Web application that encourages walking through friendly competition by betting Ethereum against friends and family.',
  "An improved course finder for UofT students which adds many queries which UofT's current course finder does not provide.",
  'Program that models the functionality of an ATM with powerful advanced features like image check recognition.',
  'A game written with Pygame based off of the movie Tron, where users try to avoid crashing into each other!',
];
const projectImages = [
  require('../images/Rubiks.png'),
  require('../images/Nimo.png'),
  require('../images/MealPrep.png'),
  require('../images/Fitcoin.png'),
  require('../images/UofT2.png'),
  require('../images/ATM.png'),
  require('../images/Tron.png'),
];
const githubs = [
  'https://github.com/ashih2018/rubiks-cube',
  'https://github.com/codeturtle00/rbc-nimo-db',
  'https://github.com/ashih2018/meal-prep-4-u',
  'https://github.com/jakeod99/fitcoin',
  'https://github.com/ashih2018/uoft-course-finder',
  'https://github.com/ashih2018/ATM',
  'https://github.com/ashih2018/tron',
];
const devpost = [
  null,
  'https://devpost.com/software/nimo-rbc-s-convenient-payment-application',
  'https://devpost.com/software/meal-prep-4-u',
  null,
  null,
  null,
  null,
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
          projectDevpost={devpost[i]}
          projectGithub={githubs[i]}
        />
      );
    }
    return allProjects;
  }
  render() {
    return (
      <div id='projects' className='project-wrapper section'>
        <div className='title-wrapper'>
          <h1 className='title header'>my projects</h1>
        </div>

        <div id='projects' className='project-wrapper'>
          {this.getProjects()}
        </div>
      </div>
    );
  }
}

export default Projects;
