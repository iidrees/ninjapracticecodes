var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');
myReadStream.on('data', function(chunk) {
	console.log('new chunk received ');
	myWriteStream.write(chunk);
});