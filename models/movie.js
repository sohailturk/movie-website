const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    realease-date:{
        type:Date,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min: 1,
        max:5
    },
    ticket-price:{
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
