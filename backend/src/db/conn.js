const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
   useNewUrlParser:true, 
   useUnifiedTopology:true,
   useCreateIndex:true 
}).then(() => {
    console.log("Connected with mongodb");
}).catch((e) => {
    console.log("Failed to connect");
})