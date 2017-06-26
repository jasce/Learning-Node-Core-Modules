var http = require('http');
var fs= require('fs');

var server = http.createServer(function(req, res){
	if(req.url === '/home' || req.url === '/'){
		res.writeEnd(200 , {'Content-type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else if(req.url === '/contact'){
		res.writeEnd(200 , {'Content-type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}
	else if(req.url === '/api/jasmeet'){
		var jasmeet = [{name: 'jasmeet' , age: 22},{name: 'gurjeet' , age: 22} ];
		res.writeEnd(200 , {'Content-type': 'application/json'});
		res.end(JSON.stringify(jasmeet));
	}
	else{
		res.writeEnd(404 , {'Content-type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
	
});

server.listen(3000 , '127.0.0.1');
console.log('listening on port 3000');