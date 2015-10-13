module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      develop: {
        src: 'js/app.js',
        dest: 'bundle.js',
        options: {
          watchifyOptions: {
            'poll': true // for NFS mounts (ie: vagrant)
          }
        }
      }
    },
    less: {
      develop: {
        options: {
          paths: ['./less'],
          compress: true
        },
        files: {
          './bundle.css': './less/main.less'
        }
      }
    },
    autoprefixer: {
      develop: {
        src: './bundle.css'
      }
    },
    watch: {
      less: {
        files: ["./less/**/*"],
        tasks: ["less:develop", "autoprefixer:develop"]
      },
      js: {
        files: ["./js/**/*"],
        tasks: ["browserify:develop"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('start', ['less:develop','browserify:develop','watch']);
  grunt.registerTask( 'build', [ 'less:develop', 'browserify:develop' ] );
}
