import Request from 'superagent';
import AppConstants from '../constants/AppConstants';

export default class RSVPActionCreators {
  static sendRSVP( data ) {
    return new Promise( ( resolve, reject ) => {
      Request.post( AppConstants.API_ROOT + '/rsvp' ).send( data ).end( ( err, res ) => {
        if( err ) {
          reject( ( res && res.body ) ? res.body : err );
        } else {
          resolve( res );
        }
      });
    });
  }
}
