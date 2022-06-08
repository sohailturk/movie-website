const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"user name is required"],
    }
    ,
    email:{
        type:String,
        lowercase:true,
        required:[true,"user name is required"],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength: [5,"password must atleast 5 characters long"]
    }
})

userSchema.statics.authUser = async function (email,password){
    const user =  await this.findOne({email});
    if(!user){
        throw new Error("user does not exist")
    }
    const isValid = await bcrypt.compare(password,user.password);
    if(!isValid){
        throw new Error("credentials does not match")
    }
    return user;
}


userSchema.pre("save",async function (next) {
    let user = this;
    user.password = await bcrypt.hash(this.password,8);
    next()
})


const User = new mongoose.model("User",userSchema);

module.exports = User