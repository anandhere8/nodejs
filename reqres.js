const http = require('http');

const server = http.createServer((req,res)=>
{
const url = req.url;
res.setHeader('content-type','text/html');
res.write('<html>');
if(url=== '/')
{
   
    res.write('<head><title> Message </title></head>');
   
    res.write('<body><form method="POST" action="/message" ><input type="text" name = "message" >  </input><button type="submit">send</button></form></body>')
    res.write('</html>');
    return res.end();
}
//res.setHeader('content-type','text/html');
//res.write('<html>');
res.write('<head><title> Feedback </title></head>');

res.write('<body><h1>Thank you for your feedback</h1></body>')
res.write('</html>');
});

server.listen(3000);