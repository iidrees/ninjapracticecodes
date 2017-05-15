var fs = require('fs');

//A synchronous way of doing it
//var readMe = fs.readFileSync('readme.txt', 'utf8');

//fs.writeFileSync('writeme.txt', readMe);


// The Asynchronous way of doing it


//fs.readFile('readme.txt', 'utf8', function(err, data) {
	//fs.writeFile('writemen.txt', data);
//});
//how to delete a file created through the fs.writeFile().
//fs.unlink('writeme.txt');


// you use fs.mkdirSync() and fs.rmdirSync() to create and remove directories in a current directory. This is also the synchronous method of doing it.

// The asynchronous way to creat a dir and a file in it.

/*fs.mkdir('testdir', function() {
	fs.readFile('readme.txt', 'utf8', function(err, data) {
		fs.writeFile('./testdir/newWrite.txt', data);
	});
});
*/

//This is an asynchronous way to remove a file from a dir and delete the dir itself.

fs.unlink('./testdir/newWrite.txt', function() {
	fs.rmdir('testdir');
})