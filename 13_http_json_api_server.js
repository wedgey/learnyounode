var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var route = url.parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'application/json'});
  var date = new Date(route.query.iso);

  if (route.pathname == '/api/parsetime') {
    var result = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
  }

  if (route.pathname == '/api/unixtime') {
    var result = {"unixtime": Date.parse(route.query.iso)};
  }

  res.end(JSON.stringify(result));
});

server.listen(port);