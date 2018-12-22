var express = require('express');
var ejs = require('ejs'); //import


var app = express();
var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('App running on port %s', port);
});

app.set('view engine', 'ejs'); //set your view engine

app.use(express.static(__dirname + '/public')); //filters

/* http://localhost:8080 */
app.get('/', function(req, res) { 
	//connect to mysql/mongodb -> and send user object to client

	res.render('home'); //redirecting request to index.ejs
	//res.sendFile(__dirname + '/index.html');
});

/* http://localhost:8080/cityname */
app.get('/:city', function(req, res) {

	console.log('City name is: ', req.params.city);
	var cityName = req.params.city;
	var imageCount = 4;
	var cityLabel = "";

	if(cityName == 'newyork'){
		imageCount = 6;
		cityLabel = 'New York';
	}
	else if(cityName == 'berlin'){
		cityLabel = 'berlin';
	}
	else if(cityName == 'london'){
		cityLabel = 'London';
	}
	else if(cityName == 'madrid'){
		cityLabel = 'Madrid';
	}
	else if(cityName == 'paris'){
		cityLabel = 'Paris';
	}


	res.render('city', { cityName: cityName, cityLabel : cityLabel, imageCount: imageCount});

});