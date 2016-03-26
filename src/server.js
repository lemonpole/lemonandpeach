/**
* NodeJS/Express server setup
*/
var colors = require( 'colors' );
var express = require( 'express' );
var vhost = require( 'vhost' );
var app = express();

app.set( 'port', process.env.PORT || 3131 );
app.use( vhost( 'lemonandpeach.us', require( './frontend' ) ) );
app.use( vhost( 'api.lemonandpeach.us', require( './api' ) ) );

app.listen( app.get( 'port' ), function() {
    console.log( colors.green( 'express server listening on port ' + app.get( 'port' ) ) );
});

/**
* Database setup
*/
var mongoose = require( 'mongoose' );

mongoose.connect( process.env.MONGO_URI || 'localhost/nef' );
mongoose.connection.on( 'open', function() {
    console.log( colors.green( 'mongoose connected to mongodb successfully' ) );
});
mongoose.connection.on( 'error', function() {
    console.log( colors.red( 'could not connect to mongodb. did you forget to run `mongod`?' ) );
});
