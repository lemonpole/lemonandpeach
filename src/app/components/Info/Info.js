import React from 'react';
import { Link } from 'react-router';
import NavCmp from '../Common/Nav';
import FancyDividerCmp from '../Common/FancyDivider';
import MapCmp from './Map';

const ADDRESS = '1906 Rittenhouse Square, Philadelphia, PA 19103';
const DEFAULT_ZOOM = 15;

class InfoCmp extends React.Component {
  constructor( props ) {
    super( props ); 
  }

  _mapOnClick() {
    // when the marker is clicked we want to take the user to google maps.
    console.log( 'clicked!' );
  }

  render() {
    return (
      <div id="info">
        <NavCmp location={ this.props.location } />

        <div className="container">
          <section className="row location">
            <div className="col-md-12">
              <h2>Location</h2>
              <div className="google-map-container">
                <MapCmp className="google-map" address={ ADDRESS } defaultZoom={ DEFAULT_ZOOM } onClick={ this._mapOnClick.bind( this ) }>
                  <div>
                    <b>Philadelphia Ethical Society</b><br />
                    1906 Rittenhouse Square<br />
                    Philadelphia, PA 19103<br />
                    <a onClick={ this._mapOnClick.bind( this ) }>Open in maps</a>
                  </div>
                </MapCmp>
              </div>
            </div>
          </section>

          <section className="row">
            <FancyDividerCmp className="col-md-12" />
          </section>

          <section className="row hotel">
            <div className="col-md-12">
              <h2>Accomodations</h2>
              <p>We have a block of hotel rooms reserved under the name <b>Pinero &amp; Rivera Wedding</b>.</p>
              <address>
                <b>Hampton Inn Philadelphia Convention Center</b><br />
                1301 Race Street, Philadelphia, PA 19107<br />
                215-665-9100
              </address>
              <p>Please be sure to make your reservations by <span className="text-danger">May 3, 2016</span>.</p>
            </div>
          </section>

          <section className="row">
            <FancyDividerCmp className="col-md-12" />
          </section>

          <section className="row">
            <div className="col-md-12">
              <h2>Parking</h2>
              <p>Parking will be provided by <b>SO AND SO</b></p>
              <p>For more information visit their website or call: 215-133-3337.</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default InfoCmp;
