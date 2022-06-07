const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength: [5,"password must atleast 5 characters long"]
    }
})


const User = new mongoose.model("User",userSchema);

module.exports = User