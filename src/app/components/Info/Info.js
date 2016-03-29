import React from 'react';
import { Link } from 'react-router';
import NavCmp from '../Common/Nav';
import { GoogleMap, Marker } from 'react-google-maps';
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader';

class InfoCmp extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div id="info">
        <NavCmp location={ this.props.location } />

        <ScriptjsLoader
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
              defaultZoom={ 18 }
              defaultCenter={{ lat: 39.9485890, lng: -75.1730360 }}
            >
              <Marker position={{ lat: 39.9485890, lng: -75.1730360 }} defaultAnimation={ 2 } />
            </GoogleMap>
          }
        />
      </div>
    );
  }
}

export default InfoCmp;
