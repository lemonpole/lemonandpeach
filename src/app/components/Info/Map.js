import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

let geocoder = {};

class MapCmp extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      result: false
    };
  }

  componentDidMount() {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.props.address }, ( results, status ) => {
      if( status == google.maps.GeocoderStatus.OK ) {
        this.setState({ result: results[ 0 ] });
      } else {
        console.log( status );
      }
    });
  }

  render() {
    if( !this.state.result ) {
      return (
        <div className={ this.props.className }>
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      );
    }

    return (
      <GoogleMapLoader
        hostname={ 'maps.googleapis.com' }
        pathname={ '/maps/api/js' }
        query={{ v: '3.22', libraries: 'geometry,drawing,places' }}
        loadingElement={
          <div><i className="fa fa-spinner fa-spin"></i></div>
        }
        containerElement={
          <div className={ this.props.className } />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={ this.props.defaultZoom }
            defaultCenter={ this.state.result.geometry.location }
            defaultOptions={{ disableDefaultUI: true, scrollwheel: false, maxZoom: this.props.defaultZoom }}
          >
            <Marker position={ this.state.result.geometry.location } defaultAnimation={ 2 } onClick={ this.props.onClick }>
              <InfoWindow>
                { this.props.children } 
              </InfoWindow>
            </Marker> 
          </GoogleMap>
        }
      />
    );
  }
}

export default MapCmp;
