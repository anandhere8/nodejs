const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{

    res.send('<form action ="/product" method="POST"><input type ="text" name="title" ><button type="submit">Add Product</button></input></form>');
   });

app.use('/product',(req,res,next)=>{
console.log(req.body);
//res.send(req.body);
res.redirect('/add-product');
});

app.use('/app',(req,res,next)=>{
    res.send('This is a feedback');
    //next();
});

app.use('/',(req,res,next)=>{
   // console.log("This is  middle ware");
    res.send('This is a middle ware');
    next();
});


app.listen(3000);