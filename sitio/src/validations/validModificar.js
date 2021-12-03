const { check } = require("express-validator");
const path = require("path");
const fs = require("fs");
//productos
let producto = path.join(__dirname, "../data/producto.json");

let validarModificar = [
  check("title").notEmpty().withMessage("El campo no puede estar vacío"),
  

  check("price").notEmpty().withMessage("El campo no puede estar vacío")
  .isNumeric().withMessage("Debe ser un número"),

  check("discount")
  .custom((value, { req }) => {
    
    if (value !== "") {
      console.log(value);
      console.log(typeof value);
      let number = Number(value)
      console.log(typeof value);
      console.log(isNaN(value));
      if (isNaN(value)) { 
        throw new Error("Tiene que ser numérico");
      }
    } return true;
  }), 

  check("description").notEmpty().withMessage("El campo no puede estar vacío"),

  check("categoryId").notEmpty().withMessage("El campo no puede estar vacío"),

];

module.exports = validarModificar;
