var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var handler = require('./request-handler')

var port = process.env.port || 1337;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

// Redirect the user to Facebook for authentication. When complete, Facebook will 
// redirect the user back to the application at /auth/facebook/callback
app.get('/auth/facebook', handler.authenticate);
app.get('/auth/facebook/callback', handler.authenticateCallback);

app.listen(port, function() {
  console.log('listening on port ' + port +'!');
});