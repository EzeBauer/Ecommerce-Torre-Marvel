const express = require("express");
const router = express.Router();
const path = require('path')

const { comprafinalizada,search,borrar, carrito , lista, carga, modificar ,ropa,mercha,figura,comics,/* ropa,mercha,figura,comics */detail,update,create} = require("../controllers/productsDBController");
let validarModificar = require('../validations/validModificar')
let validarCarga = require('../validations/validCarga')
let upload = require('../middlewares/multer')
const checkAdmin = require('../middlewares/checkAdmin');
const perfilMiddleware = require("../middlewares/perfilMiddleware");

 

/* /productos */
router.get("/", lista);


router.get("/carga",checkAdmin, carga);
router.post("/carga", upload.single("image"), validarCarga, create);
router.get("/modificar/:id",checkAdmin,modificar);
router.put("/modificar/:id",upload.single('image'),validarModificar,update);
 router.get("/ropa", ropa);
router.get("/merchandising", mercha);
router.get("/comics", comics);
router.get("/figuras", figura);
router.get("/detail/:id", detail);
router.delete('/borrar/:id',borrar);
 router.get("/carrito",perfilMiddleware, carrito);
router.get('/search',search);
router.get('/finalizado/:id',comprafinalizada);










module.exports = router;
