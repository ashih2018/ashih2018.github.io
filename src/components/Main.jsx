import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Main extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header />
        <Body />
      </div>
     );
  }
}
 
export default Main;