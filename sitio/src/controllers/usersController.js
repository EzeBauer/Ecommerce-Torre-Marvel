const path = require("path");
const bcryptjs = require("bcryptjs"); //para encriptar el password- que sea brcyptjs
const fs = require("fs");
const { validationResult } = require("express-validator");
const db = require('../database/models');


module.exports = {
  registro: (req, res) => {
    return res.render("registrarse");
  },
  procesarRegistro: (req, res) => {
    let resultadoValidacion = validationResult(req);
    let {nameUser,firstName,password,email,lastName}=req.body
    if (resultadoValidacion.isEmpty()) {

      db.User.create({
        nameUser:nameUser.trim(),
        firstName:firstName.trim(),
        lastName:lastName.trim(),
        email:email.trim(),
        password : bcryptjs.hashSync(req.body.password,10),
        avatar: req.file ? req.file.filename : req.body.nameUser[0].toUpperCase()+".jpg",
        rol:'usuario'
      }).then(user => {
        req.session.userLogin = {
            id : user.id,
            name : user.nameUser,
            avatar:user.avatar,
            rol:user.rol
        }
          //CARRITO//
     req.session.cart = [];

     db.Order.findOne({
       where: {
         userId: req.session.userLogin.id,
         status: "pending",
       },
       include: [
         {
           association: "carts",
           include: [
             { association: "product", include: ["category"] },
           ],
         },
       ],
     })
       .then((order) => {
         if (order) {
           order.carts.forEach((item) => {
             let product = {
               id: item.productId,
               nombre: item.product.title,
               imagen: item.product.image,
               categoria: item.product.category.name,
               cantidad: item.quantity,
               precio: item.product.price,
               total: item.product.price * item.quantity,
               orderId: order.id,
             };
             console.log(product);
             req.session.cart.push(product);
           });
         }
         return res.redirect("/users/perfil");
       })
       .catch((error) => console.log(error));

      //FIN DE CARRITO//
        return res.redirect('/')
      }).catch(error => console.log(error))
    } else {
       return res.render("registrarse", {
         errors: resultadoValidacion.mapped(),
         old: req.body,
       });
     }
     
  },
  login: (req, res) => {
    return res.render("login");
  },
  processLogin: (req, res) => {
    
    let resultadoValidacion = validationResult(req);
    const { email } = req.body;

    if(resultadoValidacion.isEmpty()){
      db.User.findOne({
        where:{
            email
        }
    }).then(user=>{
      req.session.userLogin = {
        id : user.id,
        name : user.nameUser,
        avatar:user.avatar,
        rol:user.rol,
        email:user.email,

      }
      let on = req.body.recordar;
     if (on) {
      res.cookie("userLogin", req.session.userLogin, { maxAge: 120000 });
    }
    //CARRITO//
     req.session.cart = [];

     db.Order.findOne({
       where: {
         userId: req.session.userLogin.id,
         status: "pending",
       },
       include: [
         {
           association: "carts",
           include: [
             { association: "product", include: ["category"] },
           ],
         },
       ],
     })
       .then((order) => {
         if (order) {
           order.carts.forEach((item) => {
             let product = {
               id: item.productId,
               nombre: item.product.title,
               imagen: item.product.image,
               categoria: item.product.category.name,
               cantidad: item.quantity,
               precio: item.product.price,
               total: item.product.price * item.quantity,
               orderId: order.id,
             };
             console.log(product);
             req.session.cart.push(product);
           });
         }
         return res.redirect("/users/perfil");
       })
       .catch((error) => console.log(error));

      //FIN DE CARRITO//

      /* return res.redirect("/users/perfil"); */
    })
    }else {
      return res.render("login", {
        errors: resultadoValidacion.mapped(),
        old: req.body,
      });
    } 
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('userLogin');
    res.redirect("/");
  },
  perfil : (req,res) => {
db.User.findByPk(req.session.userLogin.id)
.then(user=>res.render('profile',{user,display:false,displayError:false,}))
},
  modificar:(req,res)=>{
    res.render('modificarPerfil',{
      user:req.session.userLogin,
    })
},
  update : (req,res) => {
 
    let resultadoValidacion = validationResult(req);
    console.log(resultadoValidacion.mapped());
    if(resultadoValidacion.isEmpty()){
      console.log('las contraseñas coinciden');
      const {name,password} = req.body;
      let imgABorrar= path.join(__dirname, "../../public/images/users/"+userLogin.avatar)
        fs.unlinkSync(imgABorrar) 
      db.User.update(
          {
              nameUser : name.trim(),
              avatar: req.file ? req.file.filename : req.body.name[0].toUpperCase()+".jpg",
              password :  password != " " && bcryptjs.hashSync(password,10)
          },
          {
              where : {
                  id : req.session.userLogin.id
              }
          }).then( () => {
            
            req.session.userLogin = {
              id : req.session.userLogin.id,
              name : req.body.name,
              avatar:req.file ? req.file.filename : req.body.name[0].toUpperCase()+".jpg",
              rol:req.session.userLogin.rol,
              email:req.body.email,
          
            }
          res.redirect('/users/perfil')})
    }else {
      console.log('las contraseñas no coinciden controlador');
      if(req.file){
        let imgABorrar= path.join(__dirname, "../../public/images/users/"+req.file.filename)
        fs.unlinkSync(imgABorrar) 
        }
      return res.render("modificarPerfil", {
        errores: resultadoValidacion.mapped(),
        old: req.body,
        user: req.session.userLogin
      });
    } 
         
  },
  updatePass : (req,res) => {
    let resultadoValidacion = validationResult(req);
    console.log(resultadoValidacion.mapped());
    if(resultadoValidacion.isEmpty()){
      console.log('las contraseñas coinciden');
      const {password} = req.body;
      db.User.update(
          {
              // avatar: req.file ? req.file.filename : req.body.name[0].toUpperCase()+".jpg",
              password :  password != " " && bcryptjs.hashSync(password,10)
          },
          {
              where : {
                  id : req.session.userLogin.id
              }
          }).then( () => {
            req.session.userLogin = {
              id : req.session.userLogin.id,
              // name : req.body.name,
              // avatar:req.file ? req.file.filename : req.body.name[0].toUpperCase()+".jpg",
              rol:req.session.userLogin.rol,
              // email:req.body.email,
          
            }
          res.redirect('/users/perfil')})
    }else {
      console.log('las contraseñas no coinciden controlador');
      return res.render("profile", {
        errores: resultadoValidacion.mapped(),
        old: req.body,
        user: req.session.userLogin,
        display: "d-flex",
        displayError:"d-none"
      });
    } 
         
  },
  updateAvatar : (req,res) => {
    let imgABorrar= path.join(__dirname, "../../public/images/users/"+req.session.userLogin.avatar)
    if (req.session.userLogin.avatar !== req.session.userLogin.name[0].toUpperCase()+".jpg") {
      console.log("ruta imagen: ",imgABorrar);
      if(fs.existsSync(imgABorrar)){
        console.log("El archivo EXISTE!");
        fs.unlinkSync(imgABorrar);
      }
    }
      db.User.update(
          {
              avatar: req.file ? req.file.filename : req.body.name[0].toUpperCase()+".jpg",
          },
          {
              where : {
                  id : req.session.userLogin.id
              }
          }).then( () => {
            req.session.userLogin = {
              id : req.session.userLogin.id,
              name : req.session.userLogin.name,
              avatar:req.file ? req.file.filename : req.body.name[0].toUpperCase()+".jpg",
              rol:req.session.userLogin.rol,
              email:req.session.userLogin.email,
            }

            res.redirect('/users/perfil')
          })
  
  },
  destroy:(req, res)=>{
    let resultadoValidacion = validationResult(req);
    if (resultadoValidacion.isEmpty()) {
      db.User.destroy({
        where: { id: req.session.userLogin.id }
       }).then(()=>{ 
        req.session.destroy();
        res.clearCookie('user');
         res.redirect('/')
        })
    }else{
      return res.render("profile", {
        errores: resultadoValidacion.mapped(),
        old: req.body,
        user: req.session.userLogin,
        display: "d-none",
        displayError:"d-flex"
      });      
    }
  
  }
  
}
