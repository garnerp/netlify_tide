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

    csscomb: {
      dist: {
        files: {
          'dist/assets/css/all_comb.css': ['dist/assets/css/all.css'],
        }
      },
    },

    clean: {
      build: {
        src: ['dist/*']
      }
    },

    critical: {
      test: {
        options: {
          base: './',
          css: [
            'dist/assets/css/all.css'
          ],
        },
        // The source file
        src: 'http://garnerp.netlify.com/', //dist/index.html
        // The destination file
        dest: 'dist/result.html'
      }
    },

    /*
    critical: {
      dist: {
        options: {
          base: './',
          dimensions: [{
            width: 1300,
            height: 900
          },
            {
              width: 500,
              height: 900
            }]
        },
        files: [
          { src: ['dist/index.html'], dest: 'dist/index2.html' }
        ]
      }
    }
    */

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
    /*
        criticalcss: {
          custom: {
            options: {
                    url: "dist/index.html",
                    width: 1200,
                    height: 900,
                    outputfile: "dist/critical.css",
                    filename: "dist/assets/css/all.css", // Using path.resolve( path.join( ... ) ) is a good idea here
                    ignoreConsole: false
    
            }
          }
        },
    */
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-criticalcss'); // trying this one from Filament Group

  // Default tasks.
  grunt.registerTask('default', ['clean', 'imagemin', 'cssmin', 'copy', 'concat', 'critical']);
};