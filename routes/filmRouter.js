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

//edit form for single film

router.get("/films/:id/edit",filmController.updateForm)

//editing single film

router.patch("/films/:id",filmController.editOne)

//deleteing route

router.delete("/films/:id",filmController.deleteOne)



module.exports = router

