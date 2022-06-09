const mongoose = require("mongoose");
exports.connectDB = ()=>{
   mongoose.connect('mongodb://localhost:27017/films')
    .then(()=>{
    })
    .catch((e)=>{
    }) 
}


    