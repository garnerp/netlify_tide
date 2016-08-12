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
      css: {
        expand: true,
        cwd: 'src/css',
        src: '*.css',
        dest: 'dist/assets/css/',
      },
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/assets/css/all.css': ['src/css/globalltr.css', 'src/css/sitemaster.css']
        }
      }
    },

    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/assets'                  // Destination path prefix
        }]
      }
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


    critical: {
      dist: {
        options: {
//          base: './'
        },
        // The source file
        src: 'dist/index.html',
        // The destination file
        dest: 'dist/result.html'
      }
    }

    // The source file
    //            src: 'dist/index.html',

    // The destination file

    //                url: 'http://garnerp.netlify.com/',
    //                width: 1200,
    //                height: 900,
    //                outputfile: "critical.css",
    //                filename: "/path/to/local/all.css", // Using path.resolve( path.join( ... ) ) is a good idea here
    //                buffer: 800*1024,
    //                ignoreConsole: false
//  }
//          }
//        }
    
  });

// Load the plugins
grunt.loadNpmTasks('grunt-critical');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-csscomb');
grunt.loadNpmTasks('grunt-contrib-cssmin');
// Default tasks.
grunt.registerTask('default', ['imagemin', 'cssmin', 'copy', 'concat']);
};