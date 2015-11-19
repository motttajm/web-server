//npm install express@4.13.2 --save

var express = require('express');
var app = express();
var PORT = 3000;

var middleWare = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request (' + new Date().toString() + '): ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleWare.logger);

// about page
app.get('/about', middleWare.requireAuthentication, function (req, res) {
	res.send('About us!');
});

//expose the public folder
app.use(express.static(__dirname + '/public'));

//console.log(__dirname);

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});