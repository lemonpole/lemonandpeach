import React from 'react';
import NavCmp from '../Common/Nav';
import SplashCmp from './Splash';

class HomeCmp extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="full-height">
        <NavCmp location={ this.props.location } />
        <SplashCmp />

        <div id="married-date" className="container">
          <h1>We are getting married!</h1>
          <h2>Wednesday, May 25th, 2016</h2>
        </div>

        <div id="fancy-divider">
          <hr />
          <i className="fa fa-heart fa-lg fa-fw"></i>
          <hr />
        </div>
      </div>
    );
  }
}

export default HomeCmp;
