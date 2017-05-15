var express = require('express');

var app = express();

//how to make a basic GET request in express using routers
app.get('/', function(req,res){
	res.send('<h1>This is the test run homepage</h1>');
});

app.get('/about', function(req,res) {
	res.send('Just testing to see is this works.');

});

//How to route using unique inputs from the client after the /  and also getting same input for us.
app.get('/rooms/:id', function(req,res) {
	res.send('<h2>This is the room you requested '+ req.params.id +'</h2>');
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});