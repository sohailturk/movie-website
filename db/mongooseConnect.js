const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://sohailturk:asd3129760162@cluster0.xlued.mongodb.net/?retryWrites=true&w=majority"
const DbUrl = dbUrl
exports.connectDB = ()=>{
   mongoose.connect(DbUrl)
    .then(()=>{
        console.log("database connected")
    })
    .catch((e)=>{
        console.log(e)
    }) 
}

exports.secret = "QW4HDHM64MALLROADLEADSTOTHEromebutwearenotgoingthere"



    