var express = require ('express'),
	bodyParser = require('body-parser');

var app = express();

//this is all I need 

// turns it into a javascript object 

app.use(bodyParser.json());

app.use (function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods, OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.use(function(req, res, next){
	console.log('handeling post');
	next(); //run the next function in this list, similar to .then
})

//use - do this no matter what 

//if url encoded data, turn into javascript object

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.header('Joe', 'Is awesome');
	res.type('application/json');
	res.json({message: 'Hello World'});
});

app.get('/aaron.rodgers', function(req, res){
	res.type('application/json');
	if (req.query.lang) {
		res.json({message: 'Hola Mundo'})
	} else {
	res.json({message: 'MVP'});
	}	
});

app.get('/', function(req, res){
	console.log('handeling post');
	console.log(req.body);
	
	res.json({message: 'MVP'});
});

app.listen(8888);

