var http = require('http');

var server = http.createServer(function(req , res){
	console.log('request was made at' + req.url);
	res.writeHead(200 , {'Content-type': 'text/plain'});
	res.end('Hey');
});

server.listen(3000 , '127.0.0.1');
console.log('Listening on port 3000');