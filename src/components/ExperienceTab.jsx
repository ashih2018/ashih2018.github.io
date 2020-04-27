import React, { Component } from 'react';
import '../styles/Experience.scss';
import Collapse, { Panel } from 'rc-collapse';
class ExperienceTab extends Component {
  getTitleInfo() {
    return (
      <div className='job-info'>
        <img src={this.props.jobIcon} className='job-icon' />
        <span className='job-title'>{this.props.jobTitle}</span>
        <span>hello</span>
      </div>
    );
  }
  render() {
    return (
      <div className='collapse-wrapper'>
        <Collapse>
          <Panel className='panel' header={this.getTitleInfo()}>
            <p>{this.props.jobDescription}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default ExperienceTab;
