import React, { Component } from 'react';
import '../styles/AboutMe.scss';
import Contact from './Contact';
import { Container, Row, Col } from 'react-bootstrap'
import { summary } from '../alltext.json'

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container id='about'>
        <Row>
          <Col sm={4}>
            <img
              src={require('../images/Picture1.jpg')}
              alt='picture of me in my apartment!'
              id='mypic'
            />
          </Col>

          <Col className='summary' sm={8}>
            <h1> about me </h1>
            { summary }
            <contact />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
