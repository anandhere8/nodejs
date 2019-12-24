const http = require('http');

var server = http.createServer((req,res)=>
{
    console.log(req);
    setTimeout(()=>
    {
        process.exit();
    },6000)
});

server.listen(3000);