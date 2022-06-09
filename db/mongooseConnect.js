const res = require("express/lib/response");
const mongoose = require("mongoose");
const DbUrl = process.env.dbUrl
exports.connectDB = ()=>{
   mongoose.connect(DbUrl)
    .then(()=>{
        console.log("database connected")
    })
    .catch((e)=>{
        console.log(e)
    }) 
}


    