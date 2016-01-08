import React from 'react';
import NavCmp from '../Common/Nav';
import SplashCmp from './Splash';

class HomeCmp extends React.Component {
  render() {
    return (
      <div>
        <NavCmp />
        <SplashCmp />
      </div>
    );
  }
}

export default HomeCmp;
