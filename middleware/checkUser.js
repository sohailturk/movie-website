const jwt = require("jsonwebtoken");
const User = require("../models/User");


//router middlewares
const checkUser = ((req,res,next)=>{
    const token = req.cookies.authToken;
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async (err,token)=>{
            if(err){
                res.locals.user = null;
                res.status(500).send(err.message)
            }
            else{
                let user = await User.findById(token.id)
                res.locals.user = user;
                next()
            }
        })
    }
    else{
        res.locals.user = null
        next()
    }
})

module.exports = checkUser