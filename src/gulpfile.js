var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var gulpif = require( 'gulp-if' );
var streamify = require( 'gulp-streamify' );
var autoprefixer = require( 'gulp-autoprefixer' );
var cssmin = require( 'gulp-cssmin' );
var less = require( 'gulp-less' );
var concat = require( 'gulp-concat' );
var plumber = require( 'gulp-plumber' );
var source = require( 'vinyl-source-stream' );
var babelify = require( 'babelify' );
var browserify = require( 'browserify' );
var watchify = require( 'watchify' );
var uglify = require( 'gulp-uglify' );
var livereload = require( 'gulp-livereload' );

var production = ( process.env.NODE_ENV === 'production' );

var dependencies = [
  'react',
  'react-dom',
  'react-router',
  'underscore'
];

/*
 *--------------------------------------------------------------------------
 * Combine all JS libraries into a single file for fewer HTTP requests.
 *--------------------------------------------------------------------------
 */
gulp.task( 'vendor', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
    'bower_components/toastr/toastr.js'
  ])
  .pipe( concat( 'vendor.js' ) )
  .pipe( gulpif( production, uglify({ mangle: false }) ) )
  .pipe( gulp.dest( 'public/js' ) );
});

/*
 *--------------------------------------------------------------------------
 * Compile third-party dependencies separately for faster performance.
 *--------------------------------------------------------------------------
 */
gulp.task( 'browserify-vendor', function() {
  return browserify()
  .require( dependencies )
  .bundle()
  .pipe( source( 'vendor.bundle.js' ) )
  .pipe( gulpif( production, streamify( uglify({ mangle: false }) ) ) )
  .pipe( gulp.dest( 'public/js' ) );
});

/*
 *--------------------------------------------------------------------------
 * Compile only project files, excluding all third-party dependencies.
 *--------------------------------------------------------------------------
 */
gulp.task( 'browserify', [ 'browserify-vendor' ], function() {
  return browserify( 'app/main.js' )
  .external( dependencies )
  .transform( babelify, { presets: [ 'es2015', 'react' ] })
  .bundle()
  .pipe( source( 'bundle.js' ) )
  .pipe( gulpif( production, streamify( uglify({ mangle: false }) ) ) )
  .pipe( gulp.dest( 'public/js' ) )
  .pipe( livereload() );
});

/*
 *--------------------------------------------------------------------------
 * Compile LESS stylesheets.
 *--------------------------------------------------------------------------
 */
gulp.task( 'styles', function() {
  return gulp.src( 'app/less/main.less' )
  .pipe( plumber({
    errorHandler: function( err ) {
      console.log( err );
      this.emit( 'end' );
    }
  }) )
  .pipe( less() )
  .pipe( autoprefixer() )
  .pipe( gulpif( production, cssmin() ) )
  .pipe( gulp.dest( 'public/css' ) )
  .pipe( livereload() );
});

gulp.task( 'watch', function() {
  livereload.listen();
  gulp.watch( 'app/**/*.js', [ 'browserify' ] );
  gulp.watch( 'app/less/**/*.less', [ 'styles' ] );
});

gulp.task( 'play', [ 'styles', 'vendor', 'watch' ] );
gulp.task( 'build', [ 'styles', 'vendor', 'browserify' ] );
