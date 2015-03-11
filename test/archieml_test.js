'use strict';

var grunt = require('grunt');

exports.archieml = {
  /*
   * The most simple use case: Parsing a single ArchieML file ans saving
   * it as a single JSON file.
   */
  one_to_one_defaults: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/one_to_one_defaults.json');
    var expected = grunt.file.read('test/expected/one_to_one_defaults');
    test.equal(actual, expected, 'A single parsed ArchieML file.');

    test.done();
  },
  /*
   * Using Grunt's API to take a glob of files and convert them into an array
   * within a single JSON file
   */
  many_to_one_defaults: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/many_to_one_defaults.json');
    var expected = grunt.file.read('test/expected/many_to_one_defaults');
    test.equal(actual, expected, 'Parsed ArchieML files, combined into a single JSON file.');

    test.done();
  },
  /*
   * Testing the processFile option, which allows each parsed file to be iterated
   * over/mapped by a passed function.
   */
  many_to_one_cb: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/many_to_one_cb.json');
    var expected = grunt.file.read('test/expected/many_to_one_cb');
    test.equal(actual, expected, 'Parsed ArchieML files, with names capitalized.');

    test.done();
  }
};
