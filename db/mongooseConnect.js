const mongoose = require("mongoose");
exports.connectDB = ()=>{
   mongoose.connect('mongodb://localhost:27017/films')
    .then(()=>{
        console.log("data base connected")
    })
    .catch((e)=>{
        console.log(e)
    }) 
}


    