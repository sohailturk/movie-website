const path = require("path")
const express = require("express");
const app = express();
const mongooseConnect = require("./db/mongooseConnect");
const filmRouter = require("./routes/filmRouter")



app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;

//data base connection to mongodb
mongooseConnect.connectDB();




//router middlewares
app.use("/",filmRouter)




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
