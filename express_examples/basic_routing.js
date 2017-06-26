var express = require('express');

var app = express();

app.get('/', function(req , res){
	res.send('this is a homepage');
});

app.get('/contact', function(req , res){
	res.send('this is a contact page');
});

app.get('/user/:id', function(req , res){
	res.send('You requested to see a user of id ' + req.params.id);
});

app.listen(3000);

