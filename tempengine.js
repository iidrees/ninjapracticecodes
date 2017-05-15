var express = require('express');
var bodyParser = require('body-parser');

var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })


//set the templating engine.

app.set('view engine', 'ejs');

//middleware to help serve our css script from the assets foler

app.use('/assets', express.static('assets'));

//how to serve up html pages 
app.get('/', function(req,res){
	res.render('index');
});

app.get('/contact', function(req,res) {
	//res.render('contact');
/*	How to grab query strings from the URL in express and parse them. You use the req.query syntax to pull this from a URL. e.g http://www.google.com/search?name=Idrees&surname=Ibraheem, the query string begins from the ? mark*/
	//console.log(req.query);
	res.render('contact', {qs: req.query})

});
//how to parse data sent from forms using the POST method and the middleware to use.
app.post('/contact', urlencodedParser, function(req,res) {
	//this middleware gives us access to the body property of the req object.
	console.log(req.body);
	res.render('contact-success', {data: req.body});

});


//How to route using unique inputs from the client after the /  and also getting same input for us.
app.get('/rooms/:id', function(req,res) {
	res.send('<h2>This is the room you requested '+ req.params.id +'</h2>');
});
//How to use query strings to dynamically change data in/on a web App.
app.get('/profile/:name', function(req,res) {
	var data = {age: 500, hobby: 'kayaking', jobs: ['ninja', 'samurai', 'miscreant']};
	res.render('profiles', {person : req.params.name, data: data});
});

// 


app.listen(3000, function() {
	console.log('Listening on port 3000');
});