var http = require('http');
var server =http.createServer();

server.on( 'request', function(req,res) {
    var now = new Date();
    var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
    res.writeHead( 200, {'Content-Type' : 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html lang=ja>');
    res.write('<head><meta charset="UTF-8"></head>');
    res.write('<body>');
    res.write('<h1>Hello world</h1>');
    res.write("現在時刻は" + hour + "時", + minute + "分" + second + "秒");
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(80);

