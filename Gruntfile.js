module.exports = function (grunt) {

grunt.initConfig({
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
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');

  // Default tasks.
  grunt.registerTask('default', ['critical']);
  //grunt.registerTask('default');
};