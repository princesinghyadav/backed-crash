var http=require('http');

http.createServer(function (req,res){

    res.write('hello india ');
    res.end();
}).listen(8082);
// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8082);