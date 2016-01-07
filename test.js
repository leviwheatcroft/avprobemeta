var av = require('./index.js');

av('./test.mp4', function(err, data) {
  console.log(JSON.stringify(data, null, '  '));
});
