import React, { Component } from 'react';
import Typist from 'react-typist';
import '../styles/Body.scss';
import '../styles/FrontPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ScrollIntoView from 'react-scroll-into-view';

class FrontPage extends Component {
  state = {
    renderMsg: false,
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };
  render() {
    return (
      <div className='TypistExample front-wrapper'>
        <Typist
          className='TypistExample-header'
          avgTypingDelay={40}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}>
          Alexander Shih
        </Typist>
        <div className='TypistExample-content'>
          {this.state.renderMsg ? (
            <Typist
              className='TypistExample-message'
              cursor={{ hideWhenDone: true }}>
              * Creative Student
              <Typist.Delay ms={1250} />
              <br />
              * Motivated Computer Scientist
              <br />
              * Alexander Shih
              <br />
              <br />
              <br />
              <div className='down-arrow'>
                <ScrollIntoView selector='#header'>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                  />
                </ScrollIntoView>
              </div>
              {''}
            </Typist>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FrontPage;
