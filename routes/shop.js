const express = require('express');

const path = require('path');
const router = express.Router();


router.use('/',(req,res,next)=>{
    // console.log("This is  middle ware");
    res.sendFile(path.join(__dirname,'../','views','shop.html'));   
    //   next();
 });
 

module.exports = router;