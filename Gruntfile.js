/*
 * grunt-archieml
 * https://github.com/achavez/grunt-archieml
 *
 * Copyright (c) 2015 Andrew Chavez
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    archieml: {
      one_to_one_defaults: {
        options: {},
        files: {
          'tmp/one_to_one_defaults.json': 'test/fixtures/arrays_of_objects'
        }
      },
      many_to_one_defaults: {
        files: {
          'tmp/many_to_one_defaults.json': ['test/fixtures/simple_*']
        }
      },
      many_to_one_cb: {
        options: {
          processFile: function(item, index, items) {
            item.name = item.name.toUpperCase();
            return item;
          }
        },
        files: {
          'tmp/many_to_one_cb.json': ['test/fixtures/simple_*']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'archieml', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
