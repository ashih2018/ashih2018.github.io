import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import FrontPage from './FrontPage';
import Footer from './Footer';

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <FrontPage />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Main;
