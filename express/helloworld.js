const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send('Hello world');
});

app.get('/about',(req,res)=>{
    res.send('This is about section');
});

app.listen(3000,()=>{
    console.log("Server is running");
});