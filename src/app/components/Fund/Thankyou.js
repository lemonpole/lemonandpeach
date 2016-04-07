import React from 'react';
import NavCmp from '../Common/Nav';

export default class ThankyouCmp extends React.Component {
  constructor( props ) {
    super( props ); 
  }

  render() {
    return (
      <div id="fund">
        <NavCmp location={ this.props.location } />

        <div className="fund-container">
          <div className="inner thankyou">
            <h1>
              Thank you!
              <small>(ありがとうございます)</small>
            </h1>
            <h2>We are one step closer to Japan!</h2>
          </div>
        </div>
      </div>
    );
  }
}
