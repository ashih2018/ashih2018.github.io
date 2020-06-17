import React, { Component } from 'react';
import '../styles/Footer.scss';

class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <div id='footer'>
        <div class='footer-text'>
          Created by Alex Shih &copy; 2020
        </div>
      </div>
     );
  }
}
 
export default Footer;