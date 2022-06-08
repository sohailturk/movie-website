const Film = require("../models/Film");
const Comment = require("../models/Comment");
exports.createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const film = await Film.findById(id);
    const comment = new Comment(req.body);
    console.log(comment);
  } catch (error) {
      res.status(500).send(error)
  }
};
