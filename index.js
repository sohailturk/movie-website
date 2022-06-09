require('dotenv').config()
const path = require("path")
const express = require("express");
const app = express();
const mongooseConnect = require("./db/mongooseConnect");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken")


const expressLayouts = require("express-ejs-layouts");
const methodOverRide = require("method-override");
const isAuthed = require("./middleware/auth");
const port = process.env.PORT || 3000;
const filmRouter = require("./routes/filmRouter")
const userRouter = require("./routes/userRouter");
const User = require('./models/User');
const checkUser = require('./middleware/checkUser');


app.set(path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(expressLayouts)
app.use(methodOverRide("_method"))



//data base connection to mongodb
mongooseConnect.connectDB();









app.get("*" ,checkUser)
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
