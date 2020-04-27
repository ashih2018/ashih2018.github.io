import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ScrollIntoView from 'react-scroll-into-view';
import '../styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className='nav-wrapper' id='header'>
        <Navbar className='nav'>
          <Nav className='ml-auto'>
            <ScrollIntoView selector='#about'>
              <Nav.Link>About Me</Nav.Link>
            </ScrollIntoView>
            <ScrollIntoView selector='#experience'>
              <Nav.Link>Experience</Nav.Link>
            </ScrollIntoView>
            <Nav.Link href='#projects'>Personal Projects</Nav.Link>
            <Nav.Link href='#other'>Other</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
