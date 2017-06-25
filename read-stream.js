var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt');

myReadStream.on('data' , function(chunk){
	console.log('chunk of data recieved: ');
	console.log(chunk);
});