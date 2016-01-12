var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

module.exports = function(filePath, options, callback) {
  var avprobe;
  var cmd;
  if (typeof options == "function") {
    callback = options;
    options = {};
  }
  if (options.format !== false) {
    options.format = true;
  }
  if (options.streams !== false) {
    options.streams = true;
  }
  cmd = [
    'avprobe',
    options.streams ? '-show_streams' : '',
    options.format ? '-show_format' : '',
    '-of json',
    filePath.replace(/([\s\(\)])/gi, '\\$1')
  ].join(' ');

  avprobe = exec(cmd, function(err, stdout, stderr) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, JSON.parse(stdout));
  });
}
