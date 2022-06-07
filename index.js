const path = require("path")
const express = require("express");
const app = express();



app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))









const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.get("/")



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
