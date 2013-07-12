var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buf = new Buffer(256);

var contents = fs.readFileSync('index.html');
var contents2 = buf.write(contents, 0);

app.get('/', function(request, response) {
  response.send(contents2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
