var av = require('../index.js');
var exec = require('child_process').exec;
var should = require('should');

describe('avprobe package', function() {
  it ('should be able to return a version string', function(done) {
    exec('avprobe -version', function(err, stdout, stderr) {
      should.equal(err, null, "avprobe command returns error");
      done();
    });
  });
});

describe('format / stream options', function() {
  it('should have format & stream properties', function(done) {
    av('./test.mp4', function(err, data) {
      describe('response', function() {
        data.should.have.property('streams');
        data.should.have.property('format');
        done();
      });
    });
  });
  it('should not have stream property', function(done) {
    av('./test.mp4', { streams: false }, function(err, data) {
      describe('response', function() {
        data.should.not.have.property('streams');
        data.should.have.property('format');
        done();
      });
    });
  });
  it('should not have format property', function(done) {
    av('./test.mp4', { format: false }, function(err, data) {
      describe('response', function() {
        data.should.have.property('streams');
        data.should.not.have.property('format');
        done();
      });
    });
  });
});
