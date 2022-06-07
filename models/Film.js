const mongoose = require("mongoose");

const filmSchmema = new mongoose.Schema({
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
    }
})


const Film = new mongoose.model("Film",filmSchmema);

module.exports = Film
