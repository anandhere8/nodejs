const mongoose = require("mongoose")
const entryScheme = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    stid : {
        type : String,
        required : true,
        unique : true
    },
    number : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String, 
        required : true
    },
    confirmpassword : {
        type : String, 
        required : true
    },
    gender : {
        type : String,
        required :true
    }
});
 

// we need collections

const Register = new mongoose.model("Register", entryScheme);

module.exports = Register;