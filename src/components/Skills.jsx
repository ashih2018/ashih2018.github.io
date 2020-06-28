import React, { Component } from 'react';
import '../styles/Skills.scss';

const languages = [
  require('../images/skills/languages/Python.png'),
  require('../images/skills/languages/Java.png'),
  require('../images/skills/languages/C.png'),
  require('../images/skills/languages/HTML.png'),
  require('../images/skills/languages/CSS.png'),
  require('../images/skills/languages/Javascript.png'),
  require('../images/skills/languages/Sass.png'),
  require('../images/skills/languages/Solidity.png'),
  require('../images/skills/languages/Ruby.png'),
]



class Skills extends Component {
  getLangugages() {
    const allProjects = [];
    for (let i = 0; i < languages.length; i++) {
      allProjects.push(
        <span>
          <img className='icon' src={languages[i]} />
        </span>
      );
    }
    return allProjects;
  }
  render() {
    return ( 
      <div id='skills' className='section'>
        <div className='title-wrapper'>
          <h1 className='title header'>
            my skills
          </h1>
        </div>
        <div className='skill-wrapper'>
          <div>
            <h2> Languages </h2>
            <div>
              {this.getLangugages()}
            </div>
            <h2> Frameworks and Libraries </h2>
            <div></div>
            <h2> Other Software </h2>
            <div></div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Skills;