function checkAdmin(req,res,next) {
    if (req.session.userLogin == undefined) {
        return res.redirect('/')
    }
    if (req.session.userLogin.rol === 'usuario') {
        return res.redirect('/')
    }
        next()
    
}

module.exports= checkAdmin;