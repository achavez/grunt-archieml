/*
 * grunt-archieml
 * https://github.com/achavez/grunt-archieml
 *
 * Copyright (c) 2015 Andrew Chavez
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var archieml = require('archieml');

  // Register the task
  grunt.registerMultiTask('archieml', 'A Grunt plugin for parsing ArchieML files.', function() {

    // Set defaults
    var options = this.options({
      // Prove a noop as default
      processFile: function(item) {
        return item;
      }
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
      // Filter out files that don't exist
      var parsed = file.src.filter(function(src) {
        if (!grunt.file.exists(src)) {
          grunt.log.warn('Source file "' + src + '" not found.');
          return false;
        } else {
          return true;
        }
      })
      // Parse files
      .map(function(src) {
        grunt.log.writeln('Parsing "' + src);
        return archieml.load(grunt.file.read(src));
      })
      // Run the processing function
      .map(options.processFile);

      // Write parsed contents to destination(s)
      if(parsed.length > 1) {
        grunt.file.write(file.dest, JSON.stringify(parsed));
      }
      else {
        grunt.file.write(file.dest, JSON.stringify(parsed[0]));
      }

      // Save parsed JSON file
      grunt.log.oklns('Saved parsed ArchieML file(s) at "' + file.dest + '".');
    });
  });

};
