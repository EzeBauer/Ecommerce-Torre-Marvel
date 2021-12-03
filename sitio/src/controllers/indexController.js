const fs = require('fs')
const path = require("path");
let producto = path.join(__dirname,'../data/producto.json')
let productoparavista = JSON.parse(fs.readFileSync(producto, "utf-8"));
const db = require('../database/models')
const {Op}= require('sequelize')

module.exports = {
  index: (req, res) => {
    let category = db.Category.findAll({
      include:[
        {association:'products'}
      ]
    });
    let productsDiscount = db.Product.findAll({
      where:{
        discount : {[Op.is]: !null,}
      },
      include:[
        {association:'category'}
      ]
    })
    let products = db.Product.findAll({
      include:[
        {association:'category'}
      ]
    })

    Promise.all([category, productsDiscount,products])
    .then((response,) =>{
     
      response[0].length = response[0].length - 1 
     res.render('index',{

       category : response[0],
       
       productsDiscount : response[1],
       products:response[2],
       ofertas:productoparavista
     })
    })

  },
    detail : (req,res) => {
      
      db.Product.findByPk(req.params.id,{include:[{association:"category"}]}).then(producto => 
      res.render('descripcion-producto',{producto}))
      },
  carrito : (req,res) => {
     
    let productofinal = productoparavista.find(producto => producto.id === +req.params.id);
    console.log(productofinal)
    return res.render('carrito',{
      productofinal,productoparavista,productosdelcarrito
    })
  },
  contactos: (req, res) => {
    return res.render("contactos");
  },
  nosotros: (req, res) => {
    return res.render("sobrenosotros");
  },
  novedades: (req, res) => {
    return res.render("novedades");
  },
  admin : (req,res) => res.render('admin/index')
}
