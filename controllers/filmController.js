exports.getAll = (req,res)=>{
    res.render("films/index")
}

exports.addOne = (req,res)=>{
    res.send(req.body)
}


exports.newForm = (req,res)=>{
    res.render("films/new")
}