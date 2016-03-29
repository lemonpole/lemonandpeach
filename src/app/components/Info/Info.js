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

  render() { 
    return (
      <div id="info">
        <NavCmp location={ this.props.location } />

        <div className="container">
          <section className="row">
            <div className="col-md-12">
              <h2>Location</h2>
              <MapCmp className="google-map" address={ ADDRESS } defaultZoom={ DEFAULT_ZOOM }>
                <div>
                  <b>Philadelphia Ethical Society</b><br />
                  1906 Rittenhouse Square<br />
                  Philadelphia, PA 19103
                </div>
              </MapCmp>
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
