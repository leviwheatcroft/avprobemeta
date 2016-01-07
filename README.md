# avprobemeta
Simple avprobe wrapper for node

# installation


`$ npm install avprobemeta`

you'll also need avprobe which is available via `libav-tools` package on debian-like distros

`$ apt-get install libav-tools`

# usage

```javascript
var avprobemeta = require('avprobemeta');

avprobemeta('./test.mp4', function(err, meta) {
  console.log(JSON.stringify(meta, null, '  ');
});
```

# License

MIT licensed
