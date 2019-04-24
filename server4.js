var http = require('http');
const url = require('url');
var server =http.createServer();

server.on( 'request', function(req,res) {
    var url_parse = url.parse(req.url,true);
    res.writeHead( 200, {'Content-Type' : 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html lang=ja>');
    res.write('<head><meta charset="UTF-8"></head>');
    res.write('<body>');
    res.write('<h1>Hello world</h1>');
    console.log(url_parse);
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(80);

