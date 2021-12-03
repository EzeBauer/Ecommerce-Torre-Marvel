function checkSession(req,res,next) {
    if (req.session.userLogin) {
        return res.redirect('/')
    } else {
        next()
    }
}

module.exports= checkSession;