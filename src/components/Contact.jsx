import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { chessKnight }

class Contact extends Component {
  state = {};
  gotoGithub() {
    return;
  }
  render() {
    return (
      <div className='icon-tray'>
        <a
          href={require('../images/Resume.pdf')}
          target='_blank'
          className='icon-wrapper'>
          <FontAwesomeIcon icon={faFile} className='icon' />
        </a>
        <a
          href="mailto:alexanderchshih@gmail.com"
          target='_blank'
          className='icon-wrapper'>
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
        </a>
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
        <a
          href='https://chess.com/play/ashih2018'
          target='_blank'
          className='icon-wrapper'>
          <FontAwesomeIcon icon={faChessKnight} className='icon' />
        </a>
      </div>
    );
  }
}

export default Contact;
