const http = require('http');

var server = http.createServer((req,res)=>
{
    console.log(req);
    res.write('<html>');
    res.write('<head>');
    res.write('<title> First page');
    res.write('</title>'); 

    res.write('</head>');
    res.write('<body>');
    res.write('</body>');
    res.write('</html>');
});

server.listen(3000);