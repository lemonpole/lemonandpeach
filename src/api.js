var express = require( 'express' );
var logger = require( 'morgan' );
var bodyParser = require( 'body-parser' );
var app = express();

var RsvpModel = require( './models/rsvp' ).model;

var allowCrossDomain = function( req, res, next ) {
  res.header( 'Access-Control-Allow-Origin', 'http://lemonandpeach.us:3131' );
  res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Authorization,Content-Type' );

  next();
}

app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( allowCrossDomain );

app.post( '/rsvp', function( req, res ) {
  RsvpModel.findOne({
    fullname: req.body.fullname
  }, function( err, rsvpObj ) {
    if( err ) {
      return res.status( 400 ).json( err.errmsg );
    }

    if( rsvpObj ) {
      return res.status( 400 ).json( "person already rsvp'd" );
    }

    rsvpObj = new RsvpModel({
      fullname: req.body.fullname,
      plusOne: req.body.plusOne,
      isComing: req.body.isComing
    });

    rsvpObj.save( function( err ) {
      if( err ) {
        return res.status( 400 ).json( err.errmsg );
      }

      return res.json( rsvpObj );
    });
  });
});

module.exports = app;
