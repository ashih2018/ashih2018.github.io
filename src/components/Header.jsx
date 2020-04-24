import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <Navbar className="nav">
        <Nav className='ml-auto'>
          <Nav.Link href='#about'>About Me</Nav.Link>
          <Nav.Link href='#experience'>Experience</Nav.Link>
          <Nav.Link href='#projects'>Personal Projects</Nav.Link>
          <Nav.Link href='#other'>Other</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
