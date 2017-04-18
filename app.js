var http = require("http");

var portOne = 7000;

var portTwo = 7500;

function handleRequestOne(request, responce) {
	responce.end("yes! ")
}

function handleRequestTwo(request, responce) {
	responce.end("No! ")
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(portOne, function() {
	console.log(" Server listening on: http//localhost:%s", portOne)
});

serverTwo.listen(portTwo, function() {
	console.log(" Server listening on: http//localhost:%s", portTwo)
});