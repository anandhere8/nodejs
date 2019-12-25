const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('This is a middle ware');
    next();
});

app.use((req,res,next)=>{

    res.send("This is a feedback");
});

app.listen(3000);