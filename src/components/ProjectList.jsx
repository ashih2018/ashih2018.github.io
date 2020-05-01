import React, { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';

const projectTitles = ['WatchGuard', 'University of Toronto', 'MITRE'];
const projectDescriptions = ['asda', 'asfdasdf', 'asfdasdfsf'];
const projectImages = [
  require('../images/Watchguard.png'),
  require('../images/UofT.png'),
  require('../images/Mitre.png'),
];

class ProjectList extends Component {
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
      <div>
        <div id='experience' className='experience-wrapper'>
          {this.getProjects()}
        </div>
      </div>
    );
  }
}

export default ProjectList;
