import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import FrontPage from './FrontPage';

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <FrontPage />
        <Header />
        <Body />
      </div>
    );
  }
}

export default Main;
