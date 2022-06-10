const jwt = require("jsonwebtoken");
const db = require("../db/mongooseConnect")

const isAuthed = (req,res,next)=>{
    const authToken = req.cookies.authToken;
    if(authToken){
        jwt.verify(authToken,db.secret,(err,token)=>{
            if(err){
                res.status(500).send(err.message)
            }
            else{
                next()
            }
        })
    }
    else{
        res.redirect("/login")
    }
}

module.exports = isAuthed