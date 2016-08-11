module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/commonscript.js', 'src/desktop.js', 'src/siteroot.js'],
        dest: 'dist/assets/js/all.js',
      }
    }

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

  // Default tasks.
  grunt.registerTask('default', ['concat']);
};