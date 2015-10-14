var angular = require( 'angular' );
var $ = jQuery = require( 'jquery' );
var bootstrap = require( 'bootstrap' );

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

app.directive( 'navToggle', function() {
  return {
    restrict: 'A',
    link: function( $scope, element, attrs ) {
      $( element ).click( function() {
        var navElem = $( 'nav' );
        var navPosition = navElem.css( 'left' );

        if( navPosition != '0px' ) navElem.css( 'left', '0px' );
        else navElem.css( 'left', '-' + navElem.css( 'width' ) );
      });
    }
  };
});
