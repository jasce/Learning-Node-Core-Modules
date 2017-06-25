var http = require('http');
var fs= require('fs');

var server = http.createServer(function(req, res){
	res.writeHead(200 , {'Content-type': 'application/json'});
	var obj = {
		name: 'Jasmeet',
		age: 21,
		sex: 'Male'
	};
	//end method expect either a string or buffer
	res.end(JSON.stringify(obj));
	
});

server.listen(3000 , '127.0.0.1');
console.log('listening on port 3000');