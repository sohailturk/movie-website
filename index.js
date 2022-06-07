const path = require("path")
const express = require("express");
const app = express();
const mongooseConnect = require("./db/mongooseConnect");



app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;

//data base connection to mongodb
mongooseConnect.connectDB();








app.get("/",(req,res)=>{
    res.send("homepage")
})

app.get("/films",(req,res)=>{
    res.send("films")
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
