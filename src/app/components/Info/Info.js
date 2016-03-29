import React from 'react';
import { Link } from 'react-router';
import NavCmp from '../Common/Nav';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const ADDRESS = '1906 Rittenhouse Square, Philadelphia, PA 19103';
const DEFAULT_ZOOM = 15;

let geocoder = new google.maps.Geocoder();

class InfoCmp extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      result: false
    };
  }

  componentDidMount() {
    geocoder.geocode({ address: ADDRESS }, ( results, status ) => {
      if( status == google.maps.GeocoderStatus.OK ) {
        this.setState({ result: results[ 0 ] });
      } else {
        console.log( status );
      }
    });
  }

  // TODO: refactor, create into reusable components
  render() {
    if( !this.state.result ) {
      return (
        <div id="info">
          <NavCmp location={ this.props.location } />
          <div className="google-map">
            <i className="fa fa-spinner fa-spin"></i>
          </div>
        </div>
      );
    }

    return (
      <div id="info">
        <NavCmp location={ this.props.location } />

        <GoogleMapLoader
          hostname={ 'maps.googleapis.com' }
          pathname={ '/maps/api/js' }
          query={{ v: '3.22', libraries: 'geometry,drawing,places' }}
          loadingElement={
            <div><i className="fa fa-spinner fa-spin"></i></div>
          }
          containerElement={
            <div className="google-map" />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={ DEFAULT_ZOOM }
              defaultCenter={ this.state.result.geometry.location }
            >
              <Marker position={ this.state.result.geometry.location } defaultAnimation={ 2 }>
                <InfoWindow>
                  <div>
                    <b>Philadelphia Ethical Society</b><br />
                    1906 Rittenhouse Square<br />
                    Philadelphia, PA 19103
                  </div>
                </InfoWindow>
              </Marker> 
            </GoogleMap>
          }
        />
      </div>
    );
  }
}

export default InfoCmp;
