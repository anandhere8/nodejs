const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home',(req,res)=>{
    res.sendfile(__dirname + '/index.html');
});

app.listen(4000,()=>{
    console.log("Serving is running on port : 4000");
});