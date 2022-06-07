const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    descrription:{
        type:String,
        required:true
    },
    realeaseDate:{
        type:Date,
        required:true
    },
    rating:{
        type:Number,
        required:true
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


const Movie = new mongoose.model("Movie",movieSchema);

module.exports = Movie
