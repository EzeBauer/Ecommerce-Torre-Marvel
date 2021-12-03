const {body, check} = require('express-validator');


module.exports = [
    check("password")
    .notEmpty()
    .withMessage("Tienes que colocar una contraseña")
    .bail()
    .isLength({
      min: 8
    })
    .withMessage("La contraseña debe tener como minimo 8 caracteres"),
    
    body('password')
    .custom((value,{req}) => {
        
        if (value !== req.body.password2) {
            console.log('las contraseñas no coinciden');
            throw new Error(`Las contraseñas no coinciden`);
        }
        return true;
    })

]