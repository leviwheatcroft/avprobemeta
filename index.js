var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

module.exports = function(filePath, callback) {
  var avprobe;
  var cmd = [
    'avprobe',
    '-show_streams',
    '-show_format',
    '-of json',
    filePath.replace(/([\s\(\)])/gi, '\\$1')
  ];

  avprobe = exec(cmd.join(' '), function(err, stdout, stderr) {
    if (err) {
      console.error(cmd.join(' '));
      console.error(stderr);
      throw 'die';
      callback(err);
      return;
    }
    callback(null, JSON.parse(stdout));
  });
}


// stole this from https://gist.github.com/creationix/2502704
// Implement bash string escaping.
var safePattern =    /^[a-z0-9_\/\-.,?:@#%^+=\[\]]*$/i;
var safeishPattern = /^[a-z0-9_\/\-.,?:@#%^+=\[\]{}|&()<>; *']*$/i;
function bashEscape(arg) {
  // These don't need quoting
  if (safePattern.test(arg)) return arg;

  // These are fine wrapped in double quotes using weak escaping.
  if (safeishPattern.test(arg)) return '"' + arg + '"';

  // Otherwise use strong escaping with single quotes
  return "'" + arg.replace(/'+/g, function (val) {
    // But we need to interpolate single quotes efficiently

    // One or two can simply be '\'' -> ' or '\'\'' -> ''
    if (val.length < 3) return "'" + val.replace(/'/g, "\\'") + "'";

    // But more in a row, it's better to wrap in double quotes '"'''''"' -> '''''
    return "'\"" + val + "\"'";

  }) + "'";
}
