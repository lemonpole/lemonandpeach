import React from 'react';

class NavCmp extends React.Component {
  render() {
    return (
      <nav>
        <div id="logo-container">
          <img src="http://placehold.it/350x60" alt="Lemon and Peach" />
        </div>
        <ul id="items-container">
          <li><a href="#">Home</a></li>
          <li><a href="#">RSVP</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Japan Fund</a></li>
          <hr />
        </ul>
      </nav>
    );
  }
}

export default NavCmp;
