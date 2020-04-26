import React, { Component } from 'react';
import Expand from 'react-expand-animated';
import '../styles/Experience.scss';

class ExperienceTab extends Component {
  state = { open: false };
 
  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  
  render() { 
    return ( 
      <div className='tab-wrapper'>
        <div onClick={this.toggle} className="open">Open</div>
        <Expand open={this.state.open} className="contents">
          <div style={{ width: '300px', height: '400px', color: 'red' }}>Hello</div>
        </Expand>
      </div>
     );
  }
}
 
export default ExperienceTab;