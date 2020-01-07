const express = require('express');
const app = express();

app.use(express('public'));

require('./routes')(app);

app.set('view engine','ejs');

app.listen(3000,()=>{
    console.log('Server is running on 3000');
});

