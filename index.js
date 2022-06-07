const path = require("path")
const express = require("express");
const app = express();
const mongooseConnect = require("./db/mongooseConnect");
const filmRouter = require("./routes/filmRouter")
const expressLayouts = require("express-ejs-layouts");
const methodOverRide = require("method-override");



app.set(path.join(__dirname,"views"))
app.set("view engine","ejs")


app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(expressLayouts)
app.use(methodOverRide("_method"))



const port = process.env.PORT || 3000;

//data base connection to mongodb
mongooseConnect.connectDB();




//router middlewares
app.get("/",(req,res)=>{
    res.redirect("/films")
})
app.use("/",filmRouter)




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
