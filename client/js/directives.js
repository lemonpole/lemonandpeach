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

app.directive( 'timer', function() {
  return {
    restrict: 'E',
    scope: false,
    controller: [ '$scope', '$interval', '$element', '$attrs', function( $scope, $interval, $element, $attrs ) {
      function tick() {
        var days = 24 * 60 * 60,
            hours = 60 * 60,
            minutes = 60;
        var tillDate = new Date( $attrs.until );
        var timeLeft = Math.floor( ( tillDate - new Date() ) / 1000 );

        $scope.days = Math.floor( timeLeft / days );
        timeLeft -= $scope.days * days;

        $scope.hours = Math.floor( timeLeft / hours );
        timeLeft -= $scope.hours * hours;

        $scope.minutes = Math.floor( timeLeft / minutes );
        timeLeft -= $scope.minutes * minutes;

        $scope.seconds = timeLeft;
      }

      $interval( tick, 1000 );
      tick();
    }]
  };
});

app.directive( 'equalHeightToWidth', function(){
  return {
    restrict: 'A',
    link: function( $scope, element, attrs ) {
     var theWidth = $( element ).outerWidth();
     $( element ).height( theWidth );
    }
  };
});
