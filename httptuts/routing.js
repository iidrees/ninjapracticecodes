 var http = require('http'); //require the http module
 var fs = require('fs'); // require the file system module

//creae the http server using the http module
 var server = http.createServer(function(req, res) {
 	//log to the console the url where the req is made from
 	console.log('accessed on the url: ' + req.url);

 	// basic Conditional statements to help a basic routing system
 	if (req.url === '/home' || req.url === '/') {
 		res.writeHead(200, {'Content-Type' : 'text/html'});
 		fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
 	} else if ( req.url === '/about') {
 		res.writeHead(200, {'Content-Type':'text/html'});
 		fs.createReadStream(__dirname + '/about.html', 'utf8').pipe(res);
 	} else if (req.url === '/contact') {
 		res.writeHead(200, {'Content-Type': 'text/html'});
 		fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);

 	} else if( req.url === '/api/obj') {
 		res.writeHead(200, {'Content-Type': 'application/json'});
 		var obj = {
 			name: 'Idreeskun',
 			add: 'Lagos',
 			state: 'Lagos'

 		};
 		res.end(JSON.stringify(obj));
 	} else {
 		res.writeHead(404, {'Content-Type': 'text/html'});
 		fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
 	}
 	

});

// create the port where the server would listen to requests from the client
 server.listen(3000, function(){
 	console.log("I can Hear you on port 3000");
 });
