const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})



const Comment = new mongoose.model("Comment",commentSchema);

module.exports = Comment