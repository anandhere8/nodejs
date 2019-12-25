const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("This is a middle ware");
    next(); // allows the flow to continue to the next middle ware;
});


app.use((req,res,next) => {
    console.log("This is a another middle ware");
    res.write("This is the feedback");
});

const server = http.createServer(app);

server.listen(3000);