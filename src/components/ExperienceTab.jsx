import React, { Component } from 'react';
import '../styles/Experience.scss';
import Collapse, { Panel } from 'rc-collapse';
class ExperienceTab extends Component {
  render() {
    return (
      <div className='collapse-wrapper'>
        <Collapse>
          <Panel className='panel' header={'WatchGuard'}>
            <p>I did this</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default ExperienceTab;
