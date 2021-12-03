const express = require("express");
const router = express.Router();

const validarRegistro = require('../validations/validRegistro')
const validLogin = require('../validations/validLogin');
const validEliminar = require('../validations/validEliminar');
const checkLogin = require('../middlewares/checkLogin');
const perfilMiddleware = require('../middlewares/perfilMiddleware')
const passMiddleware = require('../validations/passMiddleware');


const {
 login,
 registro,
 procesarRegistro,
 processLogin,
 logout,
 perfil,
 destroy,
 updatePass,
 updateAvatar
} = require("../controllers/usersController");


const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/users"); //Indica en donde se va a guardar la imagen
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    //indica el nombre del archivo. path.extname(extrae la extension del archivo(de su nombre original))
  },
});
const avatar = multer({ storage });

/* /users */
router.get("/login", checkLogin,login);
router.post("/login",validLogin,processLogin);
router.get("/logout", logout);
router.get("/registro",checkLogin, registro);
router.post(
  "/registro",
  avatar.single("imagenUsuario"),
  validarRegistro,
  procesarRegistro
);
router.get("/perfil", perfilMiddleware, perfil);
router.put("/updatePass/:id", passMiddleware, updatePass);
router.put('/updateAvatar/:id', avatar.single('avatar'),updateAvatar);
router.delete('/delete',validEliminar,destroy);

module.exports = router;
