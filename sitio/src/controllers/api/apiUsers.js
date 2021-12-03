const path = require("path");
const bcryptjs = require("bcryptjs"); //para encriptar el password- que sea brcyptjs
const fs = require("fs");
const { validationResult } = require("express-validator");
const db = require('../../database/models');


const throwError = (res,error) => {
    return res.status(error.status || 500).json({
        status : error.status || 500,
        message : error.message
    })
}

module.exports = {
    processEmail: (req, res) => {
        try {
            db.User.findAll({
                attributes : ['email']
            })
            .then(resp => {
                let email = resp.map(res => res.email)
                return res.status(200).json({
                    length:email.length,
                    email
                })
            })
        } catch (error) {
            throwError(res,error)
        }
    
  }
}