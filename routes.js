const http = require('http');
const fs = require('fs');
const requestHandler = (req,res) => {

    const url = req.url;
    const method = req.method;
    res.setHeader('content-type','text/html');
    if(url === '/')
    {

    res.write('<html>');
    res.write('<head><title> Message </title></head>');
   
    res.write('<body><form method="POST" action="/message" ><input type="text" name = "message" >  </input><button type="submit">send</button></form></body>')
    res.write('</html>');
    return res.end();
    }

    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chucks) =>{
         //   console.log(chucks);
            body.push(chucks);
        });

        req.on('end',()=> {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            const msg = message.split('+');
            var ans=' ';
            for( let i of msg)
            {
                ans+=i;
                ans+=' ';
            }

            fs.writeFileSync('msgtxt.txt',ans);

        });
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
        
    }

};

module.exports= requestHandler;