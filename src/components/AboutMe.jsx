import React, { Component } from 'react';
import '../styles/AboutMe.scss';
import Contact from './Contact';
import { Container, Row, Col } from 'react-bootstrap'

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container id='about'>
        <Row>
          <Col sm={4}>
            <img
              className='image'
              src={require('../images/Picture1.jpg')}
              alt='picture of me in my apartment!'
              id='mypic'
            />
          </Col>

          <Col className='summary' sm={8}>
            <h1> about me </h1>
            i am computer science student studying at university of toronto. my
            hobbies include listening to playing volleyball, listening to music,
            biking, playing board games, solving rubik's cubes, and others.
            <contact />
          </Col>
        </Row>
      </Container>
      // <div id='about' className='section'>
      //   {/* <div className='section'> */}
      //     <div classname='image-container'>
      //       <img
      //         classname='image'
      //         src={require('../images/picture1.jpg')}
      //         alt='picture of me in my apartment!'
      //       />
      //     </div>

      //     <div classname='summary'>
      //       <h1 classname='title-wrapper'> about me </h1>
      //       i am computer science student studying at university of toronto. my
      //       hobbies include listening to playing volleyball, listening to music,
      //       biking, playing board games, solving rubik's cubes, and others.
      //       <contact />
      //     </div>
      //   {/* </div> */}
      // </div>
    );
  }
}

export default AboutMe;
