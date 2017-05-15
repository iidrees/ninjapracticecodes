//how to use the event emitter in node.js
var events = require("events");
var util = require("util");


/*var myEmitter = new events.EventEmitter();

myEmitter.on('something', function(msg) {
	console.log(msg);
})

myEmitter.emit('something', "I think I just used the event emitter");*/

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var idrees = new Person('Idrees');
var chinyere = new Person('Chinyere');
var olas = new Person('Olas');

var people = [idrees, chinyere, olas];

people.forEach(function(person) {
	person.on('speak', function(msg) {
		console.log(person.name + ' said: ' + msg);
	});
});

idrees.emit('speak', 'What is your name fam?');
chinyere.emit('speak', 'my name is Chinyere');
