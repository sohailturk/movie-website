const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

//signup form
router.get("/signup",userController.signupView);


//sign data handler
router.post("/signup",userController.signup)


//login form
router.get("/login",userController.loginView)


//login route
router.post("/login",userController.login)



//logout 

router.get("/logout",userController.logout)

module.exports = router