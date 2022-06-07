const express = require("express");
const router = express.Router();
const filmController = require("../controllers/filmController")


//fetching  all the films from database
router.get("/films",filmController.getAll)

//adding a single film to database

router.post("/films",filmController.addOne)

//show form for creating single film
router.get("/films/new",filmController.newForm)

//showing single film

router.get("/films/:id",filmController.getOne)

//updating form for single film

router.get("/films/:id/edit",filmController.updateForm)




module.exports = router

