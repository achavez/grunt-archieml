# grunt-archieml

[![CircleCI](https://img.shields.io/circleci/project/achavez/grunt-archieml.svg)](https://circleci.com/gh/achavez/grunt-archieml) [![Codecov](https://img.shields.io/codecov/c/github/achavez/grunt-archieml.svg)](https://codecov.io/github/achavez/grunt-archieml) [![GitHub release](https://img.shields.io/github/release/achavez/grunt-archieml.svg)]() [![npm](https://img.shields.io/npm/v/grunt-archieml.svg)](https://www.npmjs.com/package/grunt-archieml)

A Grunt plugin for parsing Archie Markup Language (ArchieML) files into JSON using [archieml-js](https://github.com/newsdev/archieml-js).

From [ArchieML.org](http://archieml.org/):

> ArchieML (or "AML") was created at The New York Times to make it easier to write and edit structured text on deadline that could be rendered in web pages, or more specifically, rendered in interactive graphics.

See the [ArchieML spec](http://archieml.org/spec/1.0/CR-20150306.html) and [ArchieML.org](http://archieml.org/) for more information if you're interested in learning more about the language.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-archieml --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-archieml');
```

## The "archieml" task

### Overview
In your project's Gruntfile, add a section named `archieml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  archieml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      options: {
        // Targer-specific options go here.
      }
      files: {
        'output.json': ['inputs/**.aml'],
        'output2.josn': 'single-input.aml'
      }
    },
  },
});
```

### Options

#### options.processFile
Type: `Function`

Default value: `none`

A function that will be run on each processed file, after it has been processed by ArchieML. The function is passed three parameters: the parsed file contents, the file's index within the array of files and the complete array of files.

### Usage Examples

#### Default Options
In this example, we're parsing a folder of AML files into a single JSON file. The final JSON file, `dest/data.json`, with be an array with each array item being the parsed contents of a single file in the `src/` folder.

```js
grunt.initConfig({
  archieml: {
    options: {},
    files: {
      'dest/data.json': ['src/*.aml'],
    },
  },
});
```

#### Processing files
In this example, we're doing some processing on the parsed file contents before writing them to the final JSON file.

```js
grunt.initConfig({
  archieml: {
    options: {
      processFile: function(item, index, all) {
          item = item.field.toUpperCase();
          return item;
      }
    },
    files: {
      'dest/processed.json': ['src/*.aml'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
| Date | Version | Release notes |
|---|---|---|
| 2015-03-10 | v0.1.0 | Initial release |
