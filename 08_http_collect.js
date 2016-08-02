var http = require('http');

http.get(process.argv[2], function(response) {
  var str = "";
  response.setEncoding('utf8').on("data", function(data) {
    str += data;
  });
  response.on("end", function() {
    console.log(str.length);
    console.log(str);
    return;
  });
});