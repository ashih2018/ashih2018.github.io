import React, { Component } from 'react';
import '../styles/Projects.scss'
import ProjectList from './ProjectList.jsx';

class Projects extends Component {
  render() { 
    return ( 
      <div className='project-wrapper'>
        <h1 className='title'>
          Projects
        </h1>
        <div>
          <ProjectList />
        </div>
      </div>
     );
  }
}
 
export default Projects;