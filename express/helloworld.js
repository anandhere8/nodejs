const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send('Hello world');
});

app.listen(3000,()=>{
    console.log("Server is running");
});