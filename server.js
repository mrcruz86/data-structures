var express = require('express');
var app = express();

app.set('views', __dirname + '/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use('/', function(req, res) {
	res.render('index');
});

var server = app.listen(3000, function() {
	console.log('Server running on port 3000');
});