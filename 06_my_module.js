module.exports = function(dirname, file_ext, callback) {
  var fs = require('fs');
  var pth = require('path');
  var result = [];
  var ls = fs.readdir(dirname, function(err, data) {
    if (!err) {
      data.forEach(function(file) {
        if (pth.extname(file) == '.'+file_ext) {
          result.push(file);
        }
      });
    }
    return callback(err, result);
  });
};