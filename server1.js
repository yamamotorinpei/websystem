var http = require('http');
var server =http.createServer();

server.on( 'request', function(req,res) {
    res.writeHead( 200, {'Content-Type' : 'text/plain' });
    res.write('hello cit ns3');
    res.end();
});

server.listen(80);
