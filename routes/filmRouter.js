const express = require("express");
const router = express.Router();
const filmController = require("../controllers/filmController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/images");
  },
  //add extension back
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

//fetching  all the films from database
router.get("/films", filmController.getAll);

//adding a single film to database

router.post("/films",upload.single("film[image]") ,filmController.addOne);

//show form for creating single film
router.get("/films/new", filmController.newForm);

//showing single film

router.get("/films/:id", filmController.getOne);

//edit form for single film

router.get("/films/:id/edit", filmController.updateForm);

//editing single film

router.patch("/films/:id", filmController.editOne);

//deleteing a single film

router.delete("/films/:id", filmController.deleteOne);

//adding commetns
router.post("/films/:id/comments", filmController.addComment);

module.exports = router;
