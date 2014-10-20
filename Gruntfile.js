module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      core: {
	    files: [ 'core/*.js' ],
        tasks: [ 'browserify', 'uglify:core' ]
      },
      blocks: {
	    files: [ 'blocks/*.js' ],
        tasks: [ 'concat:blocks', 'uglify:blocks' ]
      },
      javascript: {
	    files: [ 'generators/javascript.js', 'generators/javascript/*.js' ],
        tasks: [ 'concat:javascript', 'uglify:javascript' ]
      }, 
      dart: {
	    files: [ 'generators/dart.js', 'generators/dart/*.js' ],
        tasks: [ 'concat:dart', 'uglify:dart' ]
      }, 
      python: {
	    files: [ 'generators/python.js', 'generators/python/*.js' ],
        tasks: [ 'concat:python', 'uglify:python' ]
      }, 
    },
    browserify: {
      '<%= pkg.name %>.js': [ 'core/blockly.js' ]
    },
	concat: {
      blocks: {
        src: [ 'blocks/*.js' ],
        dest: 'blocks.js'
      },
      javascript: {
        src: [ 'generators/javascript.js', 'generators/javascript/*.js' ],
        dest: 'javascript.js'
      },
      dart: {
        src: [ 'generators/dart.js', 'generators/dart/*.js' ],
        dest: 'dart.js'
      },
      python: {
        src: [ 'generators/python.js', 'generators/python/*.js' ],
        dest: 'python.js'
      }
	},
	uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      core: {
        files: {
          '<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
        }
      },
      blocks: {
        files: {
          'blocks.min.js': ['blocks.js']
        }
      },
      javascript: {
        files: {
          'javascript.min.js': ['javascript.js']
        }
      },
      dart: {
        files: {
          'dart.min.js': ['dart.js']
        }
      },
      python: {
        files: {
          'python.min.js': ['python.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
