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

const frameworks = [
  require('../images/skills/frameworks/Django.png'),
  require('../images/skills/frameworks/Rails.png'),
  require('../images/skills/frameworks/React.png'),
  require('../images/skills/frameworks/Vue.png'),
  require('../images/skills/frameworks/Flask.png'),
  require('../images/skills/frameworks/OpenGL.png'),
]

const other = [
  require('../images/skills/other/Android.png'),
  require('../images/skills/other/Git.png'),
  require('../images/skills/other/Figma.svg'),
  require('../images/skills/other/Mongo.png'),
  require('../images/skills/other/Jira.svg'),
]

class Skills extends Component {
  getLangugages() {
    const allLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      allLanguages.push(
        <span>
          <img className='icon' src={languages[i]} />
        </span>
      );
    }
    return allLanguages;
  }

  getFrameworks() {
    const allFrameworks = [];
    for (let i = 0; i < frameworks.length; i++) {
      allFrameworks.push(
        <span>
          <img className='icon' src={frameworks[i]} />
        </span>
      );
    }
    return allFrameworks;
  }

  getOther() {
    const otherSoftware = [];
    for (let i = 0; i < other.length; i++) {
      otherSoftware.push(
        <span>
          <img className='icon' src={other[i]} />
        </span>
      );
    }
    return otherSoftware;
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
            <div>
              {this.getFrameworks()}
            </div>
            <h2> Other Software </h2>
            <div>
              {this.getOther()}
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Skills;