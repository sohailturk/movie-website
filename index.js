require('dotenv').config()
const path = require("path")
const express = require("express");
const app = express();
const mongooseConnect = require("./db/mongooseConnect");
const cookieParser = require("cookie-parser");

const expressLayouts = require("express-ejs-layouts");
const methodOverRide = require("method-override");
const isAuthed = require("./middleware/auth");

const filmRouter = require("./routes/filmRouter")
const userRouter = require("./routes/userRouter")


app.set(path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(expressLayouts)
app.use(methodOverRide("_method"))



const port = process.env.PORT || 3000;

//data base connection to mongodb
mongooseConnect.connectDB();




//router middlewares
app.get("/",isAuthed,(req,res)=>{
    res.redirect("/films")
})
app.use("/",filmRouter)
app.use("/",userRouter)




app.all("*",(req,res)=>{
    res.send("not found")
})


app.use((error,req,res,next)=>{
    res.status
    next(error)
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
