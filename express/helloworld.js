const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home',(req,res)=>{
    res.send('Hello world');
});

// app.get('/pro',(req,res)=>{
//     res.send('This is a pro site.')
// });
app.get('/',(req,res)=>{
    res.sendfile(__dirname + '/index.html');
});

// app.get('/about',(req,res)=>{
//     res.send('This is about section');
// });

// app.get('/hike',(res,req)=>{
//     res.send('This is hike');
// });

app.listen(3000,()=>{
    console.log("Server is running");
});