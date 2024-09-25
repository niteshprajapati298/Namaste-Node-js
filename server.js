var http = require('http');

//create a server object:
const server =  http.createServer(function (req, res) {
  res.end("Hello World"); //end the response
}); //the server object listens on port 8080
server.listen(8000)
