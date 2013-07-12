var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var contents = fs.readFileSync('index.html', 'utf8');
var contents2 = contents.toString();

app.get('/', function(request, response) {
  response.send(contents2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
