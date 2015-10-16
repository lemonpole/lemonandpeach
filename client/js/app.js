var angular = require( 'angular' );
var $ = jQuery = require( 'jquery' );
var bootstrap = require( 'bootstrap' );

var app = angular.module( 'lemonpeach', [
  require( 'angular-route' ),
  require( 'angular-animate' ),
  'lemonpeachDirectives',
  'lemonpeachControllers'
]);

require( './directives' );
require( './controllers' );

app.config([ '$routeProvider', '$provide', '$animateProvider', function( $routeProvider, $provide, $animateProvider ) {
  var apiRootElem = angular.element( document.querySelector( '#api-root' ) );

  $routeProvider.otherwise({
    redirectTo: '/',
  });

  $provide.constant( 'apiRoot', apiRootElem.attr( 'href' ) );
  $animateProvider.classNameFilter( /animate/ );
}]);
