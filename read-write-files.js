var fs = require('fs');


// Synchronous File Reading & Writing
var readme = fs.readFileSync('readme.txt' , 'utf8');
console.log(readme);
fs.writeFileSync('writeme.txt' , readme);

// Asynchronous File Reading & Writing

fs.readFile('readme.txt', 'utf8' , function(err , data){
	console.log(data);
	fs.writeFile('writeme.txt', data , function(err){
		if(err)
			console.log(err);
	});
});