
const express = require('express');
const app = express();

module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render('home');
    });
}