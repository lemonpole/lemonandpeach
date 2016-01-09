import React from 'react';
import { Link } from 'react-router';

class NavCmp extends React.Component {
  constructor( props ) {
    super( props );
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return {
      toggled: false
    }
  }

  _handleClick() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    return (
      <nav>
        <div id="bars" onClick={ this._handleClick.bind( this ) }>
          <i className="fa fa-bars fa-2x"></i>
        </div>

        <div id="logo-container">
          <img src="http://placehold.it/350x60" className="img-responsive" alt="Lemon and Peach" />
        </div>

        <ul id="items-container" className={ ( this.state.toggled ) ? 'toggled' : '' }>
          <li><a href="#">Home</a></li>
          <li><Link to="/rsvp">RSVP</Link></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Japan Fund</a></li>
          <hr />
        </ul>
      </nav>
    );
  }
}

export default NavCmp;
