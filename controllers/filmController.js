const Film = require("../models/Film")

exports.getAll = async(req,res)=>{
    try {
        const films = await Film.find({});
    res.render("films/index",{films})
    } catch (error) {
        res.status(500).send(error)
    }
    
}

exports.addOne = async (req,res)=>{
    try {
        const film = new Film(req.body.film)
    await film.save();
    res.redirect("/films")
    } catch (error) {
        res.status(500).send("internal server error",error)
    }
    
}


exports.newForm = (req,res)=>{
    res.render("films/new")
}

exports.getOne = async(req,res)=>{
    try {
        const {id} = req.params;
        const film = await Film.findById(id);
        if(!film){
            throw new Error("The selected film not found")
        }
        res.render("films/show",{film})
    } catch (error) {
        res.status(404).send(error)
    }
    
}


exports.updateForm = (req,res)=>{
    res.render("films/edit")
}