 var http = require('http');
 var fs = require('fs');

 var server = http.createServer(function(req, res) {
 	console.log('accessed on the url ' + req.url);
 	res.writeHead(200,{'Content-Type':'text/html'});
 	//Read stream from a file and send it to users in chunks with the read stream method of the fs http module.
 	//var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

 //pipe the response in other to serve the client easily.
 	//myReadStream.pipe(res);
 	
 });

 server.listen(3000, function(){
 	console.log("I can Hear you on port 3000");
 });

 