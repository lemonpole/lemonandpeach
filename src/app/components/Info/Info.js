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
                    <a href="https://goo.gl/maps/C1m87sZpr5q" target="_blank">Open in maps</a>
                  </div>
                </MapCmp>
              </div>
            </div>
          </section>

          <section className="row">
            <FancyDividerCmp className="col-md-12" />
          </section>

          <section className="row parking">
            <div className="col-md-12">
              <h2>Parking</h2>
              <p>We will be giving out discounted parking vouchers.</p>
              <address>
                <b><a href="https://goo.gl/maps/ED2RUHxJewN2" target="_blank">Open in maps</a></b><br />
                1845 Walnut Garage, Philadelphia, PA 19103<br />
                (267) 765-3665
              </address>
            </div>
          </section>

          <section className="row">
            <FancyDividerCmp className="col-md-12" />
          </section>

          <section className="row">
            <div className="col-md-12">
              <h2>Wedding Pictures</h2>
              <p>You can upload your pictures of the wedding using the Wedpics App.</p>
              <p>
                <a className="btn btn-danger" href="https://play.google.com/store/apps/details?id=com.dejami.WedPics">Download for Android</a>&nbsp;
                <a className="btn btn-danger" href="https://itunes.apple.com/us/app/wedpics-wedding-photo-app/id549402355">Download for IOS</a>
              </p>
              <p>After installing the app search for our wedding by ID: <code>LemonandPeach</code>.</p>
              <p>Once you've found us you can start posting pictures and videos right away!</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default InfoCmp;
