module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/commonscript.js', 'src/js/desktop.js', 'src/js/siteroot.js'],
        dest: 'dist/assets/js/all.js',
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '*.html',
        dest: 'dist/',
      },
      css : {
        expand: true,
        cwd: 'src/css',
        src: '*.css',
        dest: 'dist/assets/css/',
      },
    },



    //    uglify: {
    //      options: {
    //        banner: '/*! This is the Banner: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //        //banner: '/*! This is teh Banner <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //      },
    //      build: {
    //        src: 'src/<%= pkg.name %>.js',
    //        dest: 'build/<%= pkg.name %>.min.js'
    //      }
    //    },

    /*  
      critical: {
          dist: {
            options: {
              base: './'
            },
            // The source file
            src: 'dist/tide.html',
            // The destination file
            dest: 'dist/result.css'
          }
        }
    */
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default tasks.
  grunt.registerTask('default', ['copy', 'concat']);
};