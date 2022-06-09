const jwt = require("jsonwebtoken");

const isAuthed = (req,res,next)=>{
    const authToken = req.cookies.authToken;
    if(authToken){
        jwt.verify(authToken,process.env.SECRET_KEY,(err,token)=>{
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