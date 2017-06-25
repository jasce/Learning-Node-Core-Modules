var fs = require('fs');

// Make directory synchronously
fs.mkdirSync('Stuff');
// Asynchronous version
fs.mkdir('stuff1' , function(){
	fs.readFile('readme.txt' , 'utf8' , function(err, data){
		fs.writeFile('./stuff1/writeme.txt',data, function(err){
			if(err) throw err;
		});
	});
});

// Remove directory synchronously
fs.rmdirSync('Stuff');

//Removing Asynchronously(Requires directory to be empty)
//Otherwise error will be thrown

fs.unlink('./stuff1/writeme.txt',function(err){
	if(err) throw err;
	fs.rmdir('./stuff1' , function(err){
		if(err) throw err;
		else console.log('success');
	});
});



