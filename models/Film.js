const mongoose = require("mongoose");
const {Schema} = mongoose;

const filmSchmema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    realeaseDate:{
        type:Date,
        default:1994 ,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min: 1,
        max:5
    },
    ticketPrice:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    genere:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
})


const Film = new mongoose.model("Film",filmSchmema);

module.exports = Film
