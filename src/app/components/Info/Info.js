import React from 'react';
import { Link } from 'react-router';
import NavCmp from '../Common/Nav';

class InfoCmp extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div id="info">
        <NavCmp location={ this.props.location } />
      </div>
    );
  }
}

export default InfoCmp;
