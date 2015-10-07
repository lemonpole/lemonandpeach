var angular = require( 'angular' );

var app = angular.module( 'lemonpeach', [
  require( 'angular-route' ),
  require( 'angular-animate' )
]);

app.config([ '$routeProvider', '$provide', '$animateProvider', function( $routeProvider, $provide, $animateProvider ) {
  var apiRootElem = angular.element( document.querySelector( '#api-root' ) );

  $routeProvider.otherwise({
    redirectTo: '/',
  });

  $provide.constant( 'apiRoot', apiRootElem.attr( 'href' ) );
  $animateProvider.classNameFilter( /animate/ );
}]);

app.controller( 'appCtrl', [ '$scope', function( $scope ) {
  console.log( 'app controller loaded' );
}]);
