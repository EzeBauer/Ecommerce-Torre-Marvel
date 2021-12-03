const {body, check} = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

module.exports = [
    body('password')
    .custom((value,{req}) => {
        console.log(req.session.userLogin.id);
       return db.User.findOne({
            where:{
                id: req.session.userLogin.id
            }
        }).then(user =>{
            console.log('id user: ',user.id);
            if (!user || !bcrypt.compareSync(req.body.password,user.password)) {
               return Promise.reject()
            }
        }).catch(()=>Promise.reject('Credenciales inválidas'))
   
    })
]