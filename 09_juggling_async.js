var http = require('http');
var urls = process.argv.slice(2);
var results = [];
var count = urls.length;
urls.forEach(function(url, index) {
  http.get(url, function(response) {
    var str = "";
    response.on("data", function(data) {
      str += data;
    });

    response.on("end", function() {
      results[index] = str;
      count--;
      if (count == 0) {
        results.forEach(function(result) {
          console.log(result);
        });
      }
    });
  });
});