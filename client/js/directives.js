var $ = jQuery = require( 'jquery' );
var app = angular.module( 'lemonpeachDirectives', [] );

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
