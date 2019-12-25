const express = require('express');

const router = express.Router();


router.use('/',(req,res,next)=>{
    // console.log("This is  middle ware");
     res.send('Thank you for the entry');
  //   next();
 });
 

module.exports = router;