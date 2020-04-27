import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
  state = {};
  gotoGithub() {
    return;
  }
  render() {
    return (
      <div className='icon-tray'>
        <span className='icon-wrapper'>
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
        </span>
        <a
          href='https://github.com/ashih2018'
          target='_blank'
          className='icon-wrapper'>
          <FontAwesomeIcon icon={faGithub} className='icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/alexandershih2022/'
          target='_blank'
          className='icon-wrapper'>
          <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </a>
      </div>
    );
  }
}

export default Contact;
