const express = require("express");
const router = express.Router();
const filmController = require("../controllers/filmController");
const multer = require("multer");
const isAuthed = require("../middleware/auth")


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

router.post("/films",isAuthed,upload.single("film[image]") ,filmController.addOne);

//show form for creating single film
router.get("/films/new",isAuthed, filmController.newForm);

//showing single film

router.get("/films/:id",isAuthed, filmController.getOne);

//edit form for single film

router.get("/films/:id/edit",isAuthed, filmController.updateForm);

//editing single film

router.patch("/films/:id",isAuthed,filmController.editOne);

//deleteing a single film

router.delete("/films/:id",isAuthed, filmController.deleteOne);

//adding commetns
router.post("/films/:id/comments",isAuthed, filmController.addComment);

module.exports = router;
