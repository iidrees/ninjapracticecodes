 var http = require('http');
 var fs = require('fs');

 var server = http.createServer(function(req, res) {
 	console.log('accessed on the url ' + req.url);
 	res.writeHead(200,{'Content-Type':'application/json'});

 	var myObject = {
 		name: 'Idrees',
 		age: 27,
 		status: 'Single'
 	};

 	res.end(JSON.stringify(myObject));
});

 server.listen(3000, function(){
 	console.log("I can Hear you on port 3000");
 });
