/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('typescript generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('typescript:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'gulpfile.js',
      'package.json',
      'app/src/index.ts',
      'app/build/'
    ];

    helpers.mockPrompt(this.app, {
      'projectName': 'test-project',
      'moduleType' : 'CommonJS',
      'tsDest'     : 'app/build',
      'tsSrc'      : 'app/src',
      'genMaps'    : false
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
