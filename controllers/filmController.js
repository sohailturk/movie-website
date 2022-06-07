exports.getAll = (req,res)=>{
    res.render("films/index")
}

exports.addOne = (req,res)=>{
    res.render("films/new")
}


exports.createForm = (req,res)=>{
    res.render("/")
}