const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController")

router.post("/films/:id/comments",commentController.createComment)


module.exports = router