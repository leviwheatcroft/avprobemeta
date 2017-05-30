# avprobemeta
Simple avprobe wrapper for node

# installation


`$ npm install avprobemeta`

you'll also need avprobe which is available via `libav-tools` package on debian-like distros

`$ apt-get install libav-tools`

Windows users might want to check out the official static builds http://builds.libav.org/windows/

# usage

```javascript
var avprobemeta = require('avprobemeta');

// Get container format & streams
avprobemeta('./test.mp4', function(err, meta) {
  console.log(JSON.stringify(meta, null, '  '));
});

// Omit container format
avprobemeta('./test.mp4', { format: false }, function(err, meta) {
  console.log(JSON.stringify(meta, null, '  '));
});

// Omit streams
avprobemeta('./test.mp4', { streams: false }, function(err, meta) {
  console.log(JSON.stringify(meta, null, '  '));
});

// Specify avprobe binary path
avprobemeta('./test.mp4', {cmdPath: 'C:\\PROJEKTE\\libav\\bin\\avprobe'}, function(err, meta) {
  console.log(JSON.stringify(meta, null, '  '));
});
```

# License

MIT licensed
