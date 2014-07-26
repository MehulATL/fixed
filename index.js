// Server
var express = require('express');
var app = express();

// Store all environment variables
app.set('port', process.env.PORT || 3001);
app.set('env', process.env.NODE_ENV || 'production');

// App middleware
app.use(express.static(__dirname + '/www'));

app.listen(app.get('port'), function(){
  console.log('Listening on port ' + app.get('port') + ' as ' + app.get('env'));
});