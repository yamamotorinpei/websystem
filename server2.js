var http = require('http');
var server =http.createServer();

server.on( 'request', function(req,res) {
    res.writeHead( 200, {'Content-Type' : 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html lang=ja>');
    res.write('<body>');
    res.write('<h1>Hello world</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(80);

