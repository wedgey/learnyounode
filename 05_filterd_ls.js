var fs = require('fs');
var pth = require('path');

var ls = fs.readdir(process.argv[2], function(err, data) {
  if (!err) {
    data.forEach(function(file) {
      if (pth.extname(file) == '.'+process.argv[3]) {
        console.log(file);
      }
    });
  }
});