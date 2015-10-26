var app = angular.module( 'lemonpeachControllers', [] );

app.controller( 'appCtrl', [ '$scope', function( $scope ) {
  console.log( 'app controller loaded' );
}]);

app.controller( 'homeCtrl', [ '$scope', function( $scope ) {
  console.log( 'home controller loaded' );
}]);
