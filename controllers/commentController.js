const Film = require("../models/Film")
const Comment = require("../models/Comment")
exports.createComment = async(req,res)=>{
    const {id} = req.params;
    const film = await Film.findById(id);
    const comment = new Comment(re)
}