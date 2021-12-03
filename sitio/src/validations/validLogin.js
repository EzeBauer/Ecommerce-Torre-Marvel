const {body, check} = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');


module.exports = [
    body('email')
    .custom((value,{req}) => {
        console.log(value)
       return db.User.findOne({
            where:{
                email: value
            }
        }).then(user =>{
            console.log('email user: ',user.email);
            if (!user || !bcrypt.compareSync(req.body.password,user.password)) {
               return Promise.reject()
            }
        }).catch(()=>Promise.reject('Credenciales inválidas'))
   
    })
]