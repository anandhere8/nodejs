const http = require('http');

var server = http.createServer((req,res)=>
{
   // console.log(req);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> Firstpage </title></head>');
   
    res.write('<body><h1>This is my first web page again</h1></body>')
    res.write('</html>');
});

server.listen(3000);