const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('This is a middle ware');
    next();
});

app.use((req,res,next)=>{

    res.send("<h1>This is a feedback</h1>");
});

app.listen(3000);