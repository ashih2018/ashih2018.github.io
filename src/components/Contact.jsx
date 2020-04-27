import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
  state = {};
  gotoGithub() {
    return
  }
  render() {
    return (
      <div>
        <span className='icon-wrapper'>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <span className='icon-wrapper' onClick={this.gotoGithub()}>
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span className='icon-wrapper'>
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </div>
    );
  }
}

export default Contact;
