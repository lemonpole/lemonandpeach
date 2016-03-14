import Request from 'superagent';
import AppConstants from '../constants/AppConstants';

export default class RSVPActionCreators {
  static sendRSVP( data ) {
    Request.post( AppConstants.API_ROOT + '/rsvp' ).end( ( err, res ) => {
      if( err ) {
        // something wrong
      } else {
        // everything is okay
      }
    });
  }
}
