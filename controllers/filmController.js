const Film = require("../models/Film");
const Comment = require("../models/Comment")

exports.getAll = async (req, res) => {
  try {
    const films = await Film.find({});
    res.render("films/index", { films });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addOne = async (req, res) => {
  try {
    const film = new Film(req.body.film);
    await film.save();
    res.redirect("/films");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.newForm = (req, res) => {
  res.render("films/new");
};

exports.getOne = async (req, res) => {
    const { id } = req.params;
  try {
    const film = await Film.findOne({_id:id}).populate("comments");
    console.log(film)
    res.render("films/show", { film });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.updateForm = async (req, res) => {
  const { id } = req.params;
  const film = await Film.findById(id);
  res.render("films/edit", { film });
};

exports.editOne = async (req, res) => {
  const { id } = req.params;
  await Film.findByIdAndUpdate(id, req.body.film);
  res.redirect(`/films/${id}`);
};

exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  await Film.findByIdAndDelete(id);
  res.redirect("/films");
};

exports.addComment = async (req, res) => {
  const { id } = req.params;
  try {
    const film = await Film.findById(id);
    const comment = new Comment(req.body.comment);
    film.comments.push(comment);
    await comment.save();
    await film.save();
    res.redirect(`/films/${film._id}`);
  } catch (error) {
    res.status(500).send(error);
  }
};
