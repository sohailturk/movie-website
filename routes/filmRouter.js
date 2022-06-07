const express = require("express");
const router = express.Router();
const filmController = require("../controllers/filmController")


//fetching  all the films from database
router.get("/films",filmController.getAll)

//adding a single film to database

router.post("/films",filmController.addOne)

router.get("films/new",filmController.createForm)


module.exports = router

