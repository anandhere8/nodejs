const express = require('express');

const router = express.Router();



router.use('/add-product',(req,res,next)=>{

    res.send('<form action ="/product" method="POST"><input type ="text" name="title" ><button type="submit">Add Product</button></input></form>');
   });

router.use('/product',(req,res,next)=>{
console.log(req.body);
//res.send(req.body);
res.redirect('/');
});


module.exports = router;