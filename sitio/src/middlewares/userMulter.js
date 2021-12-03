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

module.exports = avatar;


