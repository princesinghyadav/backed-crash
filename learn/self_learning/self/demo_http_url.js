// var http= require('http')


// http.createServer(function (req,res){

//     req.write('hello duniya walo');
//     req.end();

// }).listen(8083)

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url,"duniya walo");
  res.end();
}).listen(8083);